import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entitis/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: '',
      image: '',
      stock: 100,
      price: 200,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`product #${id} not found`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  upDate(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((element) => element.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    }
    return null;
    /*
    const newData = {
      ...product,
      ...payload,
    };
    this.products.splice(index, 1, newData); */
    /* return {
      message: 'udDate product',
      newData,
    }; */
  }

  delete(id: number) {
    const product = this.products.findIndex((element) => element.id === id);
    if (product === -1) {
      throw new NotFoundException(`product #${id} not found`);
    }
    this.products.splice(product, 1);
    return true;
  }
}
