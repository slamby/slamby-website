import { Component } from '@angular/core';
import { LeadService } from '../home/lead.service';
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss'],
    providers: [LeadService]
})

export class SalesComponent {
    constructor(private leadService: LeadService) {}

    // tslint:disable-next-line:member-ordering
    leadDetails = {
        'FIRST_NAME': '',
        'LAST_NAME': '',
        'ORGANIZATION_NAME': '',
        'EMAIL_ADDRESS': '',
        'PHONE_NUMBER': '',
        'DESCRIPTION': ''
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
    isSuccess: boolean = false;
    isError: boolean = false;
    errorMessage: string;

    createLead() {
        this.validateForm();
        if (this.isValid) {
            this.leadService.createLead(this.leadDetails).subscribe(
                res => {
                    this.isSuccess = true;
                }, err => {
                    this.isError = true;
                    this.errorMessage = 'An error occured. Please try again.';
                }
            );
        }
    }
}
