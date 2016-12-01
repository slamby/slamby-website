import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./company.component.html'),
    styles: [require('./company.component.scss')]
})

export class CompanyComponent {
    constructor (title: Title){
        title.setTitle("Slamby - Understanding Data Made Simple");
    }
    join = function(){
        alert("Ok");
    }
}