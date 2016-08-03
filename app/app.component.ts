import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, Router, NavigationStart } from '@angular/router';

import { ProductService } from './products/product.service';
import { JobsService } from './company/jobs/jobs.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BasicFooterComponent } from './shared/footer/basic-footer.component';

@Component({
    selector: 'pm-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
        <footer></footer>
     `,
    directives: [NavbarComponent, BasicFooterComponent, ROUTER_DIRECTIVES],
    providers: [JobsService,
                ProductService,
                HTTP_PROVIDERS]
})

export class AppComponent {
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if(event instanceof NavigationStart) {
                window.scrollTo(0, 0);
            };
        });
    };
};
