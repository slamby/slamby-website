import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'app/legal/privacy.component.html',
    styleUrls: ['app/legal/privacy.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class PrivacyComponent {
    public pageTitle: string = 'Welcome';
}
