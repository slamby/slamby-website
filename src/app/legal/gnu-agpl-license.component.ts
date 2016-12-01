import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./gnu-agpl-license.component.html'),
    styles: [require('./legal.component.scss')]
})

export class GnuAgplLicenseComponent {
    constructor (title: Title){
        title.setTitle("GNU Affero General Public License");
    }
}