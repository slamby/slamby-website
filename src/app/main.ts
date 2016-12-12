import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

import 'font-awesome/css/font-awesome.min.css';
import '../assets/site.scss';

require('./google-analytics.js');

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);