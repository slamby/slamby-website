import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { WelcomeComponent } from './home/index.component';
import { ProductRoutes }        from './products/product.routes';
import { NotFoundComponent } from './msg/404.component';
import { TauComponent } from './tau/tau.component';
import { CompanyRoutes } from './company/company.routes';
import { ApiRoutes } from './api/api.routes';
import { CommunityComponent } from './community/community.component';
import { SupportComponent } from './support/support.component';

export const routes: RouterConfig = [
  { path: '', component: WelcomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'tau', component: TauComponent },
  ...ProductRoutes,
  ...CompanyRoutes,
  ...ApiRoutes,
  { path: 'community', component: CommunityComponent },
  { path: 'support', component: SupportComponent },
  { path: '**', redirectTo: '/404' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];