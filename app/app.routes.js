"use strict";
var router_1 = require('@angular/router');
var index_component_1 = require('./home/index.component');
var product_routes_1 = require('./products/product.routes');
var _404_component_1 = require('./msg/404.component');
var tau_component_1 = require('./tau/tau.component');
var company_routes_1 = require('./company/company.routes');
var api_routes_1 = require('./api/api.routes');
var community_component_1 = require('./community/community.component');
var support_component_1 = require('./support/support.component');
exports.routes = [
    { path: '', component: index_component_1.WelcomeComponent },
    { path: '404', component: _404_component_1.NotFoundComponent },
    { path: 'tau', component: tau_component_1.TauComponent }
].concat(product_routes_1.ProductRoutes, company_routes_1.CompanyRoutes, api_routes_1.ApiRoutes, [
    { path: 'community', component: community_component_1.CommunityComponent },
    { path: 'support', component: support_component_1.SupportComponent },
    { path: '**', redirectTo: '/404' }
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map