import { AppComponent } from './app.component';
import { CoreModule } from '@fedex-test/core';
import { HomeModule } from '@fedex-test/home';
import { NgModule } from '@angular/core';
import { SharedModule } from '@fedex-test/shared';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HomeModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
})
export class AppModule {}
