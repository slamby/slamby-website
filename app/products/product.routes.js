"use strict";
const product_list_component_1 = require('./product-list.component');
const product_detail_component_1 = require('./product-detail.component');
exports.ProductRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent }
];
//# sourceMappingURL=product.routes.js.map