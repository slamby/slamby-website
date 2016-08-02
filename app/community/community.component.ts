import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: '/app/community/community.component.html',
    styleUrls: ['app/community/community.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class CommunityComponent {
    public pageTitle: string = 'Welcome';
}
