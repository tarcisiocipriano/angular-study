import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { FormModule } from './form/form.module';
import { HttpModule } from './http/http.module';
import { ObservablesModule } from './observables/observables.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RoutingModule,
    FormModule,
    HttpModule,
    ObservablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
