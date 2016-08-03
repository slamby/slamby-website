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
var jobs_service_1 = require('./jobs.service');
var JobsComponent = (function () {
    function JobsComponent(router, _jobsService) {
        this.router = router;
        this._jobsService = _jobsService;
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._jobsService.getJobs()
            .subscribe(function (jobs) { return _this.jobs = jobs; }, function (error) { return _this.errorMessage = error; });
    };
    JobsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/company/jobs/jobs.component.html',
            styleUrls: ['app/company/jobs/jobs.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, jobs_service_1.JobsService])
    ], JobsComponent);
    return JobsComponent;
}());
exports.JobsComponent = JobsComponent;
//# sourceMappingURL=jobs.component.js.map