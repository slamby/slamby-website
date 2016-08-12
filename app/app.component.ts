import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, Router, NavigationEnd } from '@angular/router';

import { ProductService } from './products/product.service';
import { JobsService } from './company/jobs/jobs.service';
import { CommunityService } from './community/community.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BasicFooterComponent } from './shared/footer/basic-footer.component';

//Google Analytics Declaration
declare let ga:Function;

@Component({
    selector: 'pm-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
        <footer></footer>
    `,
    directives: [NavbarComponent, BasicFooterComponent, ROUTER_DIRECTIVES],
    providers: [JobsService,
                CommunityService,
                ProductService,
                HTTP_PROVIDERS]
})

export class AppComponent {
    currentRoute:string = '';
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                ga('send', 'pageview', event.urlAfterRedirects);
            };
        });
    };
};