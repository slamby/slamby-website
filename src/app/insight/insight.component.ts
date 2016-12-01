import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./insight.component.html'),
    styles: [require('./insight.component.scss')]
})

export class InsightComponent {
    constructor (title: Title){
        title.setTitle("Slamby Insight");
    }
}