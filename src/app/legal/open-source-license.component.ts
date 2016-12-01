import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./open-source-license.component.html'),
    styles: [require('./legal.component.scss')]
})

export class OpenSourceLicenseComponent {
    constructor (title: Title){
        title.setTitle("OSS End user license agreement");
    }
}