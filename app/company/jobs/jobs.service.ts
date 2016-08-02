import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IJob } from './job';

@Injectable()
export class JobsService {
    private _jobsUrl = '/api/jobservice';
    private _jobUrl = '/api/jobservice/';

    constructor(private _http: Http) { }

    getJobs(): Observable<IJob[]> {
        return this._http.get(this._jobsUrl)
            .map((response: Response) => <IJob[]> response.json())
            .do(()=>{})
            .catch(this.handleError);
    }

    getJob(id: number): Observable<IJob> {
        return this._http.get(this._jobUrl + id)
            .map((response: Response) => <IJob> response.json())
            .do(()=>{})
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}