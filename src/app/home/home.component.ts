import { Component, OnInit } from '@angular/core';
import { LeadService } from 'lead.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor(private leadService: LeadService){}
}