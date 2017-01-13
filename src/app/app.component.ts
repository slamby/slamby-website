import { Component } from '@angular/core';
//import { MetaService } from 'ng2-meta';
//import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { LeadService } from './insight/lead.service';
import { ROUTER_DIRECTIVES, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>
    <pm-footer></pm-footer>`,
    providers: [LeadService]
})

export class AppComponent {
    currentRoute:string = '';
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            if(event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            };
        });
    };
};