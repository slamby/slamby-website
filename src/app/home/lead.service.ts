import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class LeadService {
    constructor (
        private http: Http,
    ) {}

    createLead(
        leadDetails = {
            'FIRST_NAME': '',
            'LAST_NAME': '',
            'EMAIL_ADDRESS': '',
            'ORGANIZATION_NAME': '',
            'PHONE_NUMBER': '',
            'DESCRIPTION': ''
        }
    ): Observable<any> {
        const body = {
            'FIRST_NAME': leadDetails.FIRST_NAME,
            'LAST_NAME': leadDetails.LAST_NAME,
            'ORGANIZATION_NAME': leadDetails.ORGANIZATION_NAME,
            'EMAIL_ADDRESS': leadDetails.EMAIL_ADDRESS,
            'MOBILE_PHONE_NUMBER': leadDetails.PHONE_NUMBER,
            'VISIBLE_TO': 'EVERYONE',
            'LEAD_DESCRIPTION': 'source from website/ new campaign. \n Message: ' + leadDetails.DESCRIPTION
        };
        const bodyString = JSON.stringify(body);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('/api/create-lead', bodyString, options)
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
