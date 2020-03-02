import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpComponent } from './http.component';
import { HttpRoutingModule } from './http.routing';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { LoggingInterceptorService } from './interceptors/logging-interceptor.service';

@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ],
})
export class HttpModule { }
