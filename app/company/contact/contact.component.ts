import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/company/contact/contact.component.html',
    styleUrls: ['app/company/contact/contact.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ContactComponent {
    public pageTitle: string = 'Welcome';
}
