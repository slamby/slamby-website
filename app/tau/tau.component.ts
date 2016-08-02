import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/tau/tau.component.html',
    styleUrls: ['app/tau/tau.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class TauComponent {
    public pageTitle: string = 'Welcome';
}
