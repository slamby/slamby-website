import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    currentRouterUrl: string;

    constructor(private router: Router) {
        this.currentRouterUrl = this.router.url;
    }

    @Input() theme: String = 'theme-default';
    menuItems = [
        new MenuItem('Slamby', '/home', 'logo', false),
        new MenuItem('API', '/api', '', false),
        new MenuItem('Insight', '/insight', '', false),
        new MenuItem('Pricing', '/pricing', '', false),
        new MenuItem('Support', '/support', '', false),
        // new MenuItem('Blog', 'http://blog.slamby.com', '', true),
        new MenuItem('For developers', 'https://developers.slamby.com', '', true)
    ]

    isOpen: Boolean = false;

    menuOpen = function(){
        if(this.isOpen){
            this.isOpen = false;
        }else{
            this.isOpen = true;
        }
    }
}
