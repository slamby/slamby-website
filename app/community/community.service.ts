import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommunityService {
    private _url = '/api/subscribe/community';

    constructor(private _http: Http) { }

    SubscriberAdd(properties: Object) {
        return this._http.post(this._url,{document:properties});
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}