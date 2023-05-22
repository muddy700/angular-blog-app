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
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomHttpUrlGenerator } from './shared/custom-http-url-generator';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
