import { Component } from '@angular/core';
import { Price } from './pricing.model';
export class PricingComponent {
    constructor() {
        this.pricingEurope = [
            new Price("a1", "basic", 1, 2, 40, 17.57, 8.79, 45, 71.36),
            new Price("a2", "basic", 2, 4, 60, 47.06, 23.53, 90, 160.59),
            new Price("a3", "basic", 4, 7, 120, 117.95, 294.88, 180, 356.93),
            new Price("d3 v2", "standard", 4, 14, 200, 165.64, 82.82, 180, 438.46),
            new Price("d4 v2", "standard", 8, 28, 400, 331.28, 165.64, 360, 856.92),
            new Price("d11 v2", "standard", 2, 14, 100, 116.07, 58.04, 90, 264.11),
            new Price("d13 v2", "standard", 8, 56, 400, 464.91, 232.46, 360, 1057.37),
            new Price("d14 v2", "standard", 16, 112, 800, 929.83, 464.92, 720, 2114.75),
        ];
        this.pricingAsian = [
            new Price("a1", "basic", 1, 2, 40, 23.21, 11.61, 45, 79.82),
            new Price("a2", "basic", 2, 4, 60, 47.06, 23.53, 90, 179 - 40),
            new Price("a3", "basic", 4, 7, 120, 117.95, 294.88, 180, 398.34),
            new Price("d3 v2", "standard", 4, 14, 200, 165.64, 82.82, 180, 477.3),
            new Price("d4 v2", "standard", 8, 28, 400, 331.28, 165.64, 360, 953.85),
            new Price("d11 v2", "standard", 2, 14, 100, 116.07, 58.04, 90, 269.76),
            new Price("d13 v2", "standard", 8, 56, 400, 464.91, 232.46, 360, 1079.96),
            new Price("d14 v2", "standard", 16, 112, 800, 929.83, 464.92, 720, 2159.93),
        ];
        this.test = [1, 2, 3, 4, 5];
    }
}
PricingComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './pricing.component.html',
                styleUrls: ['./pricing.component.css']
            },] },
];
PricingComponent.ctorParameters = [];
//# sourceMappingURL=pricing.component.js.map