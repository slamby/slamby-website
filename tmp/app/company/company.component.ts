import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})

export class CompanyComponent {
    join = function(){
        alert("Ok");
    }
}