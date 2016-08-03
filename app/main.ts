import { bootstrap } from '@angular/platform-browser-dynamic';

// Our main component
import { AppComponent } from './app.component';

// Our main routes
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {enableProdMode} from '@angular/core';

import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

enableProdMode();

bootstrap(AppComponent,[
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]).catch((err: any) => console.error(err))