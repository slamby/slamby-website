import { Component } from '@angular/core';
//import { MetaService } from 'ng2-meta';
//import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>
    <pm-footer></pm-footer>`
})

export class AppComponent {};