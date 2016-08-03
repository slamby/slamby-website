"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var community_service_1 = require('./community.service');
var CommunityComponent = (function () {
    function CommunityComponent(_communityService) {
        this._communityService = _communityService;
        this.subscriber = {
            id: "",
            name: "",
            email: "",
            company: ""
        };
        this.sendForm = function () {
            this.subscriber.id = this.guid();
            this._communityService.SubscriberAdd(this.subscriber);
        };
        this.guid = function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
    }
    CommunityComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/community/community.component.html',
            styleUrls: ['app/community/community.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [community_service_1.CommunityService])
    ], CommunityComponent);
    return CommunityComponent;
}());
exports.CommunityComponent = CommunityComponent;
//# sourceMappingURL=community.component.js.map