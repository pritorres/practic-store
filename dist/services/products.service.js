"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.counterId = 1;
        this.products = [
            {
                id: 1,
                name: 'product 1',
                description: '',
                image: '',
                stock: 100,
                price: 200,
            },
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`product #${id} not found`);
        }
        return product;
    }
    create(payload) {
        console.log(payload);
        this.counterId += 1;
        const newProduct = Object.assign({ id: this.counterId }, payload);
        this.products.push(newProduct);
        return newProduct;
    }
    upDate(id, payload) {
        const product = this.findOne(id);
        if (product) {
            const index = this.products.findIndex((element) => element.id === id);
            this.products[index] = Object.assign(Object.assign({}, product), payload);
            return this.products[index];
        }
        return null;
    }
    delete(id) {
        const product = this.products.findIndex((element) => element.id === id);
        if (product === -1) {
            throw new common_1.NotFoundException(`product #${id} not found`);
        }
        this.products.splice(product, 1);
        return true;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map