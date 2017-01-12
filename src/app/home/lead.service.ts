import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeadService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {

        this.actionUrl = 'https://api.insight.ly/v2.1/Leads';

        this.headers = new Headers();
        this.headers.append('Authorization', 'Basic NDhjMjY0YTgtZGFlZi00MTUwLTk0ZWEtMTQ2NmU4ZTkxY2QzOg==');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    private obj = {
        "FIRST_NAME": "Peter",
        "LAST_NAME": "Mezei",
        "ORGANIZATION_NAME": "Slamby",
        "MOBILE_PHONE_NUMBER": "+36304375490",
        "EMAIL_ADDRESS": "peter.mezei@slamby.com",
        "WEBSITE_URL": "www.slamby.com",
        "VISIBLE_TO": "EVERYONE",
        "LEAD_DESCRIPTION": "source from website/ new campaign"
    }

    public Create = function() {
        let toAdd = JSON.stringify(this.obj);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}