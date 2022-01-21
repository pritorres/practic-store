"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
let CategoriesService = class CategoriesService {
    constructor() {
        this.counterId = 1;
        this.categories = [
            {
                id: 1,
                name: 'producto 1',
                stock: 100,
            },
        ];
    }
    findAll() {
        const categories = this.categories;
        return categories;
    }
    findOne(id) {
        const categorie = this.categories.find((item) => item.id == id);
        return categorie;
    }
    create(payload) {
        this.counterId += 1;
        const newCategorie = Object.assign({ id: this.counterId }, payload);
        this.categories.push(newCategorie);
        return newCategorie;
    }
    update(id, payload) {
        const categorieUpdate = this.findOne(id);
        const index = this.categories.findIndex((item) => item.id === id);
        const newData = Object.assign(Object.assign({}, payload), categorieUpdate);
        this.categories.splice(index, 1, newData);
        return newData;
    }
    delete(id) {
        const categorieDelete = this.categories.findIndex((item) => item.id === id);
        if (categorieDelete === -1) {
            throw new common_1.NotFoundException(`categories #${id} not found`);
        }
        this.categories.slice(categorieDelete, 1);
        return true;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map