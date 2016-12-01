import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./404.component.html'),
    styles: [require('./404.component.scss')]
})

export class NotFoundPageComponent {
    constructor (title: Title){
        title.setTitle("Page Not Found");
    }
}