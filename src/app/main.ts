import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

require('!style-loader!css-loader!sass-loader!../assets/_site.scss');
require('!style-loader!css-loader!font-awesome/css/font-awesome.min.css');
require('./google-analytics.js');

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);