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
        'EMAIL_ADDRESS': '',
        'PHONE_NUMBER': '',
        'DESCRIPTION': ''
    };

    isValid: boolean = true;

    validateForm() {
        this.isValid = true; // set it back for new checking;
        const fieldsForCheck = {
            'FIRST_NAME': '',
            'LAST_NAME': '',
            'ORGANIZATION_NAME': '',
            'EMAIL_ADDRESS': ''
        };
        for (let i = 0; i < Object.keys(fieldsForCheck).length; i++){
            if (this.leadDetails[Object.keys(fieldsForCheck)[i]].length === 0) {
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
