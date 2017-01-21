import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class NewsletterService {
    constructor (
        private http: Http,
    ) {}

    createLead(
        leadDetails = {
            'email': '',
            'firstName': '',
            'lastName': ''
        }
    ): Observable<any> {
        const bodyString = JSON.stringify(leadDetails);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('/api/newsletter/subscribe', bodyString, options)
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
