import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductService } from './products/product.service';
import { JobsService } from './company/jobs/jobs.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'pm-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
        <footer></footer>
     `,
    directives: [NavbarComponent, FooterComponent, ROUTER_DIRECTIVES],
    providers: [JobsService,
                ProductService,
                HTTP_PROVIDERS]
})

export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
