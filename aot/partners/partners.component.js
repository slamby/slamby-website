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
var PartnersComponent = (function () {
    function PartnersComponent() {
        this.partners = [
            { "name": "Microsoft", "logo": "microsoft.png" },
            { "name": "ICMA", "logo": "icma.jpg" },
            { "name": "Hungarian Tradehouse", "logo": "tradehouse.png" },
            { "name": "Digital Factory", "logo": "digital-factory.png" },
            { "name": "Fiware", "logo": "fiware.png" },
            { "name": "CEU Business School", "logo": "ceubs.jpg" },
            { "name": "CEED Tech", "logo": "ceed-tech.png" },
            { "name": "CE EN", "logo": "ce-en.jpg" }
        ];
    }
    return PartnersComponent;
}());
PartnersComponent = __decorate([
    Component({
        templateUrl: './partners.component.html',
        styleUrls: ['./partners.component.scss']
    }),
    __metadata("design:paramtypes", [])
], PartnersComponent);
export { PartnersComponent };
//# sourceMappingURL=partners.component.js.map