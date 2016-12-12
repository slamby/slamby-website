var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Price } from './pricing.model';
var PricingComponent = (function () {
    function PricingComponent() {
        //image = require("src/assets/images/dog.png");
        this.pricingEurope = [
            new Price("a1", "basic", 1, 2, 40, 17.57, 8.79, 45, 71.36),
            new Price("a2", "basic", 2, 4, 60, 47.06, 23.53, 90, 160.59),
            new Price("a3", "basic", 4, 7, 120, 117.95, 294.88, 180, 356.93),
            //new Price("d1 v2","standard",1,4,50,41.41,20.71,45,107.02),
            //new Price("d2 v2","standard",2,7,100,82.82,41.41,90,214.23),
            new Price("d3 v2", "standard", 4, 14, 200, 165.64, 82.82, 180, 438.46),
            new Price("d4 v2", "standard", 8, 28, 400, 331.28, 165.64, 360, 856.92),
            new Price("d11 v2", "standard", 2, 14, 100, 116.07, 58.04, 90, 264.11),
            //new Price("d12 v2","standard",4,28,200,232.77,116.39,180,529.16),
            new Price("d13 v2", "standard", 8, 56, 400, 464.91, 232.46, 360, 1057.37),
            new Price("d14 v2", "standard", 16, 112, 800, 929.83, 464.92, 720, 2114.75),
        ];
        this.pricingAsian = [
            new Price("a1", "basic", 1, 2, 40, 23.21, 11.61, 45, 79.82),
            new Price("a2", "basic", 2, 4, 60, 47.06, 23.53, 90, 179 - 40),
            new Price("a3", "basic", 4, 7, 120, 117.95, 294.88, 180, 398.34),
            //new Price("d1 v2","standard",1,4,50,41.41,20.71,45,119.36),
            //new Price("d2 v2","standard",2,7,100,82.82,41.41,90,238.70),
            new Price("d3 v2", "standard", 4, 14, 200, 165.64, 82.82, 180, 477.3),
            new Price("d4 v2", "standard", 8, 28, 400, 331.28, 165.64, 360, 953.85),
            new Price("d11 v2", "standard", 2, 14, 100, 116.07, 58.04, 90, 269.76),
            //new Price("d12 v2","standard",4,28,200,232.77,116.39,180,539.51),
            new Price("d13 v2", "standard", 8, 56, 400, 464.91, 232.46, 360, 1079.96),
            new Price("d14 v2", "standard", 16, 112, 800, 929.83, 464.92, 720, 2159.93),
        ];
        this.test = [1, 2, 3, 4, 5];
    }
    return PricingComponent;
}());
PricingComponent = __decorate([
    Component({
        templateUrl: './pricing.component.pug',
        styleUrls: ['./pricing.component.scss']
    }),
    __metadata("design:paramtypes", [])
], PricingComponent);
export { PricingComponent };
//# sourceMappingURL=pricing.component.js.map