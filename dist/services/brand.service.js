"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
let BrandService = class BrandService {
    constructor() {
        this.counterId = 1;
        this.brand = [
            {
                id: 1,
                name: 'Brand 1',
                logo: '',
            },
        ];
    }
    findAll() {
        return this.brand;
    }
    findOne(id) {
        const myBrand = this.brand.find((element) => element.id === id);
        if (!myBrand) {
            throw new common_1.NotFoundException(`brand ${id} not found`);
        }
        return myBrand;
    }
    create(payload) {
        console.log(payload);
        this.counterId += 1;
        const newBrand = Object.assign({ id: this.counterId }, payload);
        this.brand.push(newBrand);
        return newBrand;
    }
    update(id, payload) {
        const brand = this.findOne(id);
        console.log(brand);
        const index = this.brand.findIndex((item) => item.id === id);
        const newData = Object.assign(Object.assign({}, brand), payload);
        if (!brand) {
            throw new common_1.NotFoundException(`brand ${brand} not found`);
        }
        this.brand.splice(index, 1, newData);
        return {
            message: 'brand update',
            newData,
        };
    }
    delete(id) {
        const indexDelete = this.brand.findIndex((element) => element.id === id);
        if (indexDelete === -1) {
            throw new common_1.NotFoundException(`brand #${id} not found`);
        }
        this.brand.splice(indexDelete, 1);
        return true;
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)()
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map