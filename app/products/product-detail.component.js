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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const product_service_1 = require('./product.service');
const star_component_1 = require('../shared/star.component');
let ProductDetailComponent = class ProductDetailComponent {
    constructor(route, router, _productService) {
        this.route = route;
        this.router = router;
        this._productService = _productService;
        this.pageTitle = 'Product Detail';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.getProduct(id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getProduct(id) {
        this._productService.getProduct(id).subscribe(product => this.product = product, error => this.errorMessage = error);
    }
    onBack() {
        this.router.navigate(['/products']);
    }
    onRatingClicked(message) {
        this.pageTitle = 'Product Detail: ' + message;
    }
};
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html',
        directives: [star_component_1.StarComponent]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map