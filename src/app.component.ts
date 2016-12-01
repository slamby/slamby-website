import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>
    <pm-footer></pm-footer>`
})

export class AppComponent {
    constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
        PageScrollConfig.defaultDuration = 300;
    }
};