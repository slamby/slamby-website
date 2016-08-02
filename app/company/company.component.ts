import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/company/company.component.html',
    styleUrls: ['app/company/company.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class CompanyComponent {
    public pageTitle: string = 'Welcome';
}