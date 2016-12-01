import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

require('!style!css!sass!./assets/_site.scss');
require('!style!css!font-awesome/css/font-awesome.min.css');
require('./google-analytics.js');

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);