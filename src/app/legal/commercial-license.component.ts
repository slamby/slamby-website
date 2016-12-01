import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./commercial-license.component.html'),
    styles: [require('./legal.component.scss')]
})

export class CommercialLicenseComponent {
    constructor (title: Title){
        title.setTitle("End user license agreement");
    }
}