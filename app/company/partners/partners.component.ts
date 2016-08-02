import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/company/partners/partners.component.html',
    styleUrls: ['app/company/partners/partners.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class PartnersComponent {
    public pageTitle: string = 'Welcome';
}
