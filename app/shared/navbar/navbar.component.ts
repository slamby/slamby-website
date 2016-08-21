import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/shared/navbar/navbar.component.html',
    styleUrls: ['app/shared/navbar/navbar.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {
    isOpen = false;

    clickMenu = function(){
        this.isOpen = true ? (this.isOpen==false) : false; 
    }
    closeMenu = function(){
        this.isOpen = false;
    }
}