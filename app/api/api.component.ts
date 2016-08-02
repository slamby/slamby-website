import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/api/api.component.html',
    styleUrls: ['/app/api/api.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ApiComponent {
    public pageTitle: string = 'Welcome';
}
