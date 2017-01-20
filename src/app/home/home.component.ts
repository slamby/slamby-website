import { Component } from '@angular/core';
import { LeadService } from './lead.service';
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [LeadService]
})

export class HomeComponent {
    constructor(private leadService: LeadService) {}

    // tslint:disable-next-line:member-ordering
    leadDetails = {
        'FIRST_NAME': '',
        'LAST_NAME': '',
        'ORGANIZATION_NAME': '',
        'EMAIL_ADDRESS': ''
    };

    isValid: boolean = true;

    validateForm() {
        this.isValid = true; // set it back for new checking;
        for (let i = 0; i < Object.keys(this.leadDetails).length; i++){
            if (this.leadDetails[Object.keys(this.leadDetails)[i]].length === 0) {
                this.isValid = false;
            }
        }
    };

    // tslint:disable-next-line:member-ordering
    leadCreatedIsSuccess: boolean = false;

    createLead() {
        this.validateForm();
        if (this.isValid) {
            this.leadService.createLead(this.leadDetails).subscribe(
                res => {
                    this.leadCreatedIsSuccess = true;
                }, err => {
                    console.log(err);
                }
            );
        }
    }
}
