
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoaderService } from './app/services/loader.service';
import { loaderInterceptor } from './app/interceptors/loader.interceptor';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    importProvidersFrom(RouterModule,BrowserAnimationsModule)
    
  
  ]
});
