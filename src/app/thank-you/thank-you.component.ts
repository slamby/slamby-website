import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./thank-you.component.html'),
    styles: [require('./thank-you.component.scss')]
})

export class ThankYouComponent {
    constructor (title: Title){
        title.setTitle("Thank You");
    }
}