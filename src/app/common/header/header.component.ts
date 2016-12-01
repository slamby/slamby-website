import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';

@Component({
    selector: 'pm-header',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class HeaderComponent {
    @Input() theme: String = "theme-default";
    menuItems = [
        new MenuItem("Slamby","/home","logo",false),
        new MenuItem("Insight","/insight","",false),
        new MenuItem("Pricing","/pricing","",false),
        new MenuItem("Support","/support","",false),
        new MenuItem("Community","/community","",false),
        new MenuItem("For developers","https://developers.slamby.com","",true)
    ]

    isOpen : Boolean = false;

    menuOpen = function(){
        if(this.isOpen){
            this.isOpen = false;
        }else{
            this.isOpen = true;
        }
    }
}