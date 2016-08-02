import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '/app/api/serverrequest.component.html',
    styleUrls: ['/app/api/serverrequest.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ServerRequestComponent {
    public pageTitle: string = 'Welcome';
}
