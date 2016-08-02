import { Component, OnInit, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'footer',
    templateUrl: 'app/shared/footer/footer.component.html',
    styleUrls: ['app/shared/footer/footer.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class FooterComponent {
    
}