import { Component, AfterContentInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: '/app/getting-started/getting-started.component.html',
    styleUrls: ['app/getting-started/getting-started.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [Title]
})

export class GettingStartedComponent implements AfterContentInit {
    public constructor(private titleService: Title ) { }

    public ngAfterContentInit(){
        this.titleService.setTitle( "Slamby - Smart Text Classification for E-commerce" );
    }
}