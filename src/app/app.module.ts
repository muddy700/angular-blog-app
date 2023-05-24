import { ModuleWithProviders, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { MaterialModule } from './material.module';

import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent } from './shared';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  EntityDataModule,
  EntityDataService,
  EntityDefinitionService,
  HttpUrlGenerator,
} from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomHttpUrlGenerator } from './shared/custom-http-url-generator';
import { AppEntityMetaData } from './shared/app-entity-metadata';
import { CategoryDataService } from './categories/store/category-data-service';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    categoryDataService: CategoryDataService,
    entityDataService: EntityDataService
  ) {
    entityDefinitionService.registerMetadataMap(AppEntityMetaData);
    entityDataService.registerService('Category', categoryDataService);
  }
}
