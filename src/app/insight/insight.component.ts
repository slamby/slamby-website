import { Component, OnInit } from '@angular/core';
import { LeadService } from './lead.service';
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: './insight.component.html',
    styleUrls: ['./insight.component.scss'],
    providers: [LeadService]
})

export class InsightComponent implements OnInit {
    constructor(private leadService: LeadService) {}

    // ngOnInit() {
    //     this.leadService.createLead().subscribe(
    //         res => {
    //             console.log(res);
    //         }, err => {
    //             console.log(err);
    //         }
    //     );
    // }
}
