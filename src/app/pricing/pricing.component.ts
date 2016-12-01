import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Price } from './pricing.model';

@Component({
    template: require('./pricing.component.html'),
    styles: [require('./pricing.component.scss')]
})

export class PricingComponent {
    constructor (title: Title){
        title.setTitle("Pricing");
    }

    //image = require("src/assets/images/dog.png");

    pricingEurope = [
        new Price("a1","basic",1,2,40,17.57,8.79,45,71.36),
        new Price("a2","basic",2,4,60,47.06,23.53,90,160.59),
        new Price("a3","basic",4,7,120,117.95,294.88,180,356.93),
        new Price("d1 v2","standard",1,4,50,41.41,20.71,45,107.02),
        new Price("d2 v2","standard",2,7,100,82.82,41.41,90,214.23),
        new Price("d3 v2","standard",4,14,200,165.64,82.82,180,438.46),
        new Price("d4 v2","standard",8,28,400,331.28,165.64,360,856.92),
        new Price("d11 v2","standard",2,14,100,116.07,58.04,90,264.11),
        new Price("d12 v2","standard",4,28,200,232.77,116.39,180,529.16),
        new Price("d13 v2","standard",8,56,400,464.91,232.46,360,1057.37),
        new Price("d14 v2","standard",16,112,800,929.83,464.92,720,2114.75),
        new Price("d15 v2","standard",20,140,1000,1162.60,581.30,900,2643.90)
    ];

    pricingAsian = [
        new Price("a1","basic",1,2,40,23.21,11.61,45,79.82),
        new Price("a2","basic",2,4,60,47.06,23.53,90,179-40),
        new Price("a3","basic",4,7,120,117.95,294.88,180,398.34),
        new Price("d1 v2","standard",1,4,50,41.41,20.71,45,119.36),
        new Price("d2 v2","standard",2,7,100,82.82,41.41,90,238.70),
        new Price("d3 v2","standard",4,14,200,165.64,82.82,180,477.3),
        new Price("d4 v2","standard",8,28,400,331.28,165.64,360,953.85),
        new Price("d11 v2","standard",2,14,100,116.07,58.04,90,269.76),
        new Price("d12 v2","standard",4,28,200,232.77,116.39,180,539.51),
        new Price("d13 v2","standard",8,56,400,464.91,232.46,360,1079.96),
        new Price("d14 v2","standard",16,112,800,929.83,464.92,720,2159.93),
        new Price("d15 v2","standard",20,140,1000,1162.60,581.30,900,2669.43)
    ];

}