"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_controller_1 = require("./controllers/products.controller");
const categories_controller_1 = require("./controllers/categories.controller");
const brand_controller_1 = require("./controllers/brand.controller");
const products_service_1 = require("./services/products.service");
const brand_service_1 = require("./services/brand.service");
const categories_service_1 = require("./services/categories.service");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'priscilatorres',
                password: 'panconqueso1',
                database: 'prueba',
                entities: ['entitis/*.ts'],
                synchronize: true,
                migrations: ['migration/*.ts'],
                cli: {
                    migrationsDir: 'migration',
                },
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            products_controller_1.ProductsController,
            categories_controller_1.CategoriesController,
            brand_controller_1.BrandController,
        ],
        providers: [app_service_1.AppService, products_service_1.ProductsService, brand_service_1.BrandService, categories_service_1.CategoriesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map