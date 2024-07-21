import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),
  {provide: LocationStrategy, useClass:HashLocationStrategy}
  ]
};
