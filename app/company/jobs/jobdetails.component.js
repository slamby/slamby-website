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
var JobDetailsComponent = (function () {
    function JobDetailsComponent(route, router, _jobsService) {
        this.route = route;
        this.router = router;
        this._jobsService = _jobsService;
        this.job = { id: null, title: { rendered: "" }, content: { rendered: "" }, date: null };
    }
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getJob(id);
        });
    };
    JobDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JobDetailsComponent.prototype.getJob = function (id) {
        var _this = this;
        this._jobsService.getJob(id)
            .subscribe(function (job) { return _this.job = job; }, function (error) { console.log(error); });
    };
    JobDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/company/jobs/jobdetails.component.html',
            styleUrls: ['app/company/jobs/jobdetails.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, jobs_service_1.JobsService])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());
exports.JobDetailsComponent = JobDetailsComponent;
//# sourceMappingURL=jobdetails.component.js.map