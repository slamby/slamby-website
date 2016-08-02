import { bootstrap } from '@angular/platform-browser-dynamic';

// Our main component
import { AppComponent } from './app.component';

// Our main routes
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {enableProdMode} from '@angular/core';

enableProdMode();

bootstrap(AppComponent,[
  APP_ROUTER_PROVIDERS
]).catch((err: any) => console.error(err))