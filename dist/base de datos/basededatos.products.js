"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'mysql',
            host: 'localhost',
            port: 5423,
            username: 'root',
            password: 'root',
            database: 'test',
        }),
    },
];
//# sourceMappingURL=basededatos.products.js.map