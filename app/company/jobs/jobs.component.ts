import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { JobsService } from './jobs.service';
import { IJob } from './job';

@Component({
    templateUrl: '/app/company/jobs/jobs.component.html',
    styleUrls: ['app/company/jobs/jobs.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class JobsComponent implements OnInit {
    jobs: IJob[];
    errorMessage: any;

    constructor(private router: Router,
                private _jobsService: JobsService){
    }

    ngOnInit(): void {
        this._jobsService.getJobs()
                .subscribe(
                    jobs => this.jobs = jobs,
                    error => this.errorMessage = <any>error);
    }
}