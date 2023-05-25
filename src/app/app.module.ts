import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  EntityDataModule,
  EntityDataService,
  EntityDefinitionService,
  HttpUrlGenerator,
} from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FooterComponent, HeaderComponent } from './shared/layouts';
import { AppEntityMetaData } from './shared/entities';
import {
  AuthInterceptor,
  CustomHttpUrlGenerator,
  MaterialModule,
  entityConfig,
} from './shared/configurations';
import { CategoryDataService, PostDataService } from './shared/data-services';

const rootRouting: ModuleWithProviders<any> = RouterModule.forRoot([], {
  useHash: true,
});

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    rootRouting,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HttpUrlGenerator,
      useClass: CustomHttpUrlGenerator,
    },
    CategoryDataService,
    PostDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    categoryDataService: CategoryDataService,
    postDataService: PostDataService,
    entityDataService: EntityDataService
  ) {
    entityDefinitionService.registerMetadataMap(AppEntityMetaData);

    entityDataService.registerServices({
      Category: categoryDataService,
      Post: postDataService,
    });
  }
}
