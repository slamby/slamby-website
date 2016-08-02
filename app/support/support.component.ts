import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/support/support.component.html',
    styleUrls: ['app/support/support.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class SupportComponent {
    public pageTitle: string = 'Welcome';
}
