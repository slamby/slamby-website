import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    template: require('./company.component.html'),
    styles: [require('./company.component.scss')]
})

export class CompanyComponent {
    join = function(){
        alert("Ok");
    }
}