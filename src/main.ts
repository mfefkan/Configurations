import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: (httpClient: HttpClient) => {
        httpClient
          .get("./assets/config/appConfig.json")
          .subscribe(configs => console.log(configs))
      },
      deps: [HttpClient],
    }
  ]
});
