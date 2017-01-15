import { Component } from '@angular/core';
import { LeadService } from './lead.service';

@Component({
    templateUrl: './insight.component.html',
    styleUrls: ['./insight.component.scss'],
    providers: [LeadService]
})

export class InsightComponent {
    constructor(private leadService: LeadService){}
    sayHello() {
        console.log(
            this.leadService.sayHello('Peti')
        );
    }
}
