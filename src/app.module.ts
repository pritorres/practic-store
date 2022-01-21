import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    AppController,
    ProductsController,
    CategoriesController,
    BrandController,
  ],
  providers: [AppService, ProductsService, BrandService, CategoriesService],
})
export class AppModule {}
