var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.model';
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.theme = "theme-default";
        this.menuItems = [
            new MenuItem("Slamby", "/home", "logo", false),
            //new MenuItem("Insight","/insight","",false),
            new MenuItem("Pricing", "/pricing", "", false),
            new MenuItem("Support", "/support", "", false),
            //new MenuItem("Community","/community","",false),
            new MenuItem("For developers", "https://developers.slamby.com", "", true)
        ];
        this.isOpen = false;
        this.menuOpen = function () {
            if (this.isOpen) {
                this.isOpen = false;
            }
            else {
                this.isOpen = true;
            }
        };
    }
    return HeaderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "theme", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'pm-header',
        templateUrl: './header.component.pug',
        styleUrls: ['./header.component.scss']
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map