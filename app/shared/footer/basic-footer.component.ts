import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'footer',
    templateUrl: 'app/shared/footer/basic-footer.component.html',
    styleUrls: ['app/shared/footer/basic-footer.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class BasicFooterComponent {
    date:any = new Date();
    thisYear:number = this.date.getFullYear();
}