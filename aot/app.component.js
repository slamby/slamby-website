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
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { PageScrollConfig } from 'ng2-page-scroll';
import { MetaService } from 'ng2-meta';
var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, metaService) {
        this.metaService = metaService;
        PageScrollConfig.defaultDuration = 300;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'pm-app',
        template: "<router-outlet></router-outlet>\n    <pm-footer></pm-footer>"
    }),
    __metadata("design:paramtypes", [Angulartics2GoogleAnalytics,
        MetaService])
], AppComponent);
export { AppComponent };
;
//# sourceMappingURL=app.component.js.map