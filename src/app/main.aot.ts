import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from './app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);