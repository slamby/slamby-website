"use strict";
var api_component_1 = require('./api.component');
var pricing_component_1 = require('./pricing.component');
var serverrequest_component_1 = require('./serverrequest.component');
exports.ApiRoutes = [
    {
        path: 'api',
        component: api_component_1.ApiComponent
    },
    {
        path: 'api/pricing',
        component: pricing_component_1.PricingComponent
    },
    {
        path: 'api/server-request',
        component: serverrequest_component_1.ServerRequestComponent
    }
];
//# sourceMappingURL=api.routes.js.map