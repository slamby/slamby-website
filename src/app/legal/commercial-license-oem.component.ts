import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./commercial-license-oem.component.html'),
    styles: [require('./legal.component.scss')]
})

export class CommercialLicenseOemComponent {
    constructor (title: Title){
        title.setTitle("End user license agreement (OEM)");
    }
}