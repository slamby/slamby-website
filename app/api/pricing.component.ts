import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: '/app/api/pricing.component.html',
    styleUrls: ['/app/api/pricing.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class PricingComponent {
    public pageTitle: string = 'Welcome';
}
