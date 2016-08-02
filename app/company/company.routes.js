"use strict";
const company_component_1 = require('./company.component');
const contact_component_1 = require('./contact/contact.component');
const partners_component_1 = require('./partners/partners.component');
const jobs_component_1 = require('./jobs/jobs.component');
const jobdetails_component_1 = require('./jobs/jobdetails.component');
exports.CompanyRoutes = [
    { path: 'company', component: company_component_1.CompanyComponent },
    { path: 'company/contact', component: contact_component_1.ContactComponent },
    { path: 'company/partners', component: partners_component_1.PartnersComponent },
    { path: 'company/jobs', component: jobs_component_1.JobsComponent },
    { path: 'company/jobs/:id', component: jobdetails_component_1.JobDetailsComponent }
];
//# sourceMappingURL=company.routes.js.map