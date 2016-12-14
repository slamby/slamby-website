import { Component } from '@angular/core';
export class CompanyComponent {
    constructor() {
        this.join = function () {
            alert("Ok");
        };
    }
}
CompanyComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './company.component.html',
                styleUrls: ['./company.component.css']
            },] },
];
CompanyComponent.ctorParameters = [];
//# sourceMappingURL=company.component.js.map