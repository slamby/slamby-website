import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./support.component.html'),
    styles: [require('./support.component.scss')]
})

export class SupportComponent {
    constructor (title: Title){
        title.setTitle("Support");
    }
}