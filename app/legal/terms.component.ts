import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'app/legal/terms.component.html',
    styleUrls: ['app/legal/terms.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class TermsComponent {
    public pageTitle: string = 'Welcome';
}
