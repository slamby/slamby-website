import { Component, OnInit } from '@angular/core';
import { LeadService } from './lead.service';

@Component({
    templateUrl: './insight.component.html',
    styleUrls: ['./insight.component.css']
})

export class InsightComponent implements OnInit {
    // constructor(private leadService:LeadService){}
    // ngOnInit(){
    //     var leadService = new LeadService();
    //     console.log(leadService.someMethod(
    //         "Peti"
    //     ));
    // }
}