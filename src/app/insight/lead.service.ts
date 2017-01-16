import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class LeadService {
    constructor (private http: Http) {}

    createLead(): Observable<any> {
        const body = {
            'FIRST_NAME': 'Peter',
            'LAST_NAME': 'Mezei',
            'ORGANIZATION_NAME': 'Slamby',
            'MOBILE_PHONE_NUMBER': '+36304375490',
            'EMAIL_ADDRESS': 'peter.mezei@slamby.com',
            'WEBSITE_URL': 'www.slamby.com',
            'VISIBLE_TO': 'EVERYONE',
            'LEAD_DESCRIPTION': 'source from website/ new campaign'
        }
        const bodyString = JSON.stringify(body);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3000/api/create-lead', bodyString, options)
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
