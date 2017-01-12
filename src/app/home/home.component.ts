import { Component, OnInit } from '@angular/core';
import { LeadService } from './lead.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [LeadService]
})

export class HomeComponent {
    constructor(private leadService: LeadService){}
    ngOnInit(){
        console.log(this.leadService.someMethod());
    }
}