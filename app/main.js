"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Our main component
const app_component_1 = require('./app.component');
// Our main routes
const app_routes_1 = require('./app.routes');
const core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
]).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map