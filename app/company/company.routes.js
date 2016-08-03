"use strict";
var company_component_1 = require('./company.component');
var contact_component_1 = require('./contact/contact.component');
var partners_component_1 = require('./partners/partners.component');
var jobs_component_1 = require('./jobs/jobs.component');
var jobdetails_component_1 = require('./jobs/jobdetails.component');
exports.CompanyRoutes = [
    { path: 'company', component: company_component_1.CompanyComponent },
    { path: 'company/contact', component: contact_component_1.ContactComponent },
    { path: 'company/partners', component: partners_component_1.PartnersComponent },
    { path: 'company/jobs', component: jobs_component_1.JobsComponent },
    { path: 'company/jobs/:id', component: jobdetails_component_1.JobDetailsComponent }
];
//# sourceMappingURL=company.routes.js.map