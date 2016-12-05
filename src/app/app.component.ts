import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { PageScrollConfig } from 'ng2-page-scroll';
import { MetaService } from 'ng2-meta';


@Component({
    selector: 'pm-app',
    template: `<router-outlet></router-outlet>
    <pm-footer></pm-footer>`
})

export class AppComponent {
    constructor(
        angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
        private metaService: MetaService
    ) {
        PageScrollConfig.defaultDuration = 300;
    }
};