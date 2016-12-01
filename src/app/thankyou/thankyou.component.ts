import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./thankyou.component.html'),
    styles: [require('./thankyou.component.scss')]
})

export class ThankYouComponent {
    constructor (title: Title){
        title.setTitle("Page Not Found");
    }
}