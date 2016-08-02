import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/home/index.component.html',
    styleUrls: ['app/home/index.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
