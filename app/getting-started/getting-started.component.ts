import { Component, AfterContentInit, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: '/app/home/getting-started.component.html',
    styleUrls: ['app/home/getting-started.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [Title]
})

export class GettingStartedComponent implements AfterContentInit {

    public constructor(private titleService: Title ) { }

    public ngAfterContentInit(){
        this.titleService.setTitle( "Slamby - Smart Text Classification for E-commerce" );
    }

    public ngOnInit(){
        window.location.href="https://developers.slamby.com";
    }
}