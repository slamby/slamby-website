import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.scss')]
})

export class HomeComponent {
    constructor (title: Title){
        title.setTitle("Slamby - Understanding Data Made Simple");
    }
}