import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./getting-started.component.html'),
    styles: [require('./getting-started.component.scss')]
})

export class GettingStartedComponent {
    constructor (title: Title){
        title.setTitle("Getting started - Slamby");
    }
}