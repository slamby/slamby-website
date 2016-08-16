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

    team = [
        {
            "name":"Peter Mezei",
            "image":"peter-mezei",
            "position":"CEO",
            "email":"peter.mezei@slamby.com"
        },
        {
            "name":"Attila Laszlo",
            "image":"attila-laszlo",
            "position":"CTO",
            "email":"attila.laszlo@slamby.com"
        },
        {
            "name":"Bela Soós",
            "image":"bela-soos",
            "position":"Developer",
            "email":"bela.soos@slamby.com"
        },
        {
            "name":"Zsolt Illés",
            "image":"zsolt-illes",
            "position":"Developer",
            "email":"zsolt.illes@slamby.com"
        },
        {
            "name":"Zsolt Rábai",
            "image":"zsolt-rabai",
            "position":"Mathematician",
            "email":"zsolt.rabai@slamby.com"
        },
        {
            "name":"Agnes Nagy",
            "image":"agnes-nagy",
            "position":"Mathematician",
            "email":"agnes.nagy@slamby.com"
        },
        {
            "name":"Örsel Sani",
            "image":"orsel-sani",
            "position":"Head of Community",
            "email":"orsel.sani@slamby.com"
        },
        {
            "name":"Judit Gál",
            "image":"judit-gal",
            "position":"Project Manager",
            "email":"judit.gal@slamby.com"
        },
        {
            "name":"Rita Papp",
            "image":"rita-papp",
            "position":"Product Development Advisor",
            "email":"rita.papp@slamby.com"
        }
    ]

    ngOnInit(): void {
        this._jobsService.getJobs()
                .subscribe(
                    jobs => this.jobs = jobs,
                    error => this.errorMessage = <any>error);
    }
}