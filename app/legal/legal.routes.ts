import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { TermsComponent } from './terms.component';
import { PrivacyComponent } from './privacy.component';

export const LegalRoutes: RouterConfig = [
  {
    path: 'legal',
    component: TermsComponent
  },
  {
    path: 'legal/terms',
    component: TermsComponent
  },
  {
    path: 'legal/privacy',
    component: PrivacyComponent
  }
];