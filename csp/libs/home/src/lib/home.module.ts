import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './home/http-error.interceptor';
import { NgModule } from '@angular/core';
import { RegisterService } from './home/register.service';
import { SharedModule } from '@fedex-test/shared';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [SharedModule],
  providers: [
    // HTTP Interceptors.
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    RegisterService,
  ],
})
export class HomeModule {}
