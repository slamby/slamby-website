import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { JobsService } from './jobs.service';
import { IJob } from './job';

@Component({
    templateUrl: '/app/company/jobs/jobdetails.component.html',
    styleUrls: ['app/company/jobs/jobdetails.component.css'],
})

export class JobDetailsComponent implements OnInit, OnDestroy {
    job: IJob;
    sub: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _jobsService: JobsService){
        this.job = {id:null,title:{rendered:""},content:{rendered:""},date:null};
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getJob(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getJob(id: number) {
        this._jobsService.getJob(id)
                .subscribe(
                    job => this.job = job,
                    error => {console.log(error)});
    }
}