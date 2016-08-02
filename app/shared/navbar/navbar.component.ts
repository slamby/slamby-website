import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/shared/navbar/navbar.component.html',
    styleUrls: ['app/shared/navbar/navbar.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    hello = function(){
        console.log("hello");
    };
}