import { Component, AfterContentInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
    templateUrl: '/app/tau/tau.component.html',
    styleUrls: ['app/tau/tau.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [Title]
})
export class TauComponent implements AfterContentInit {
    public constructor(private titleService: Title ) { }

    public ngAfterContentInit(){
        this.titleService.setTitle( "TAU as a productivity tool for your Slamby Server - Slamby" );
    }
}
