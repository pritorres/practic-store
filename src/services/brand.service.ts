import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entitis/brand.entity';
import { CreateBrandDto, UpdateBranDto } from '../dtos/brand.dto';

@Injectable()
export class BrandService {
  private counterId = 1;
  private brand: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      logo: '',
    },
  ];

  findAll() {
    return this.brand;
  }

  findOne(id: number) {
    const myBrand = this.brand.find((element) => element.id === id);
    if (!myBrand) {
      throw new NotFoundException(`brand ${id} not found`);
    }
    return myBrand;
  }

  create(payload: CreateBrandDto) {
    console.log(payload);
    this.counterId += 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brand.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBranDto) {
    const brand = this.findOne(id);
    console.log(brand);
    const index = this.brand.findIndex((item) => item.id === id);
    const newData = {
      ...brand,
      ...payload,
    };
    if (!brand) {
      throw new NotFoundException(`brand ${brand} not found`);
    }
    this.brand.splice(index, 1, newData);
    return {
      message: 'brand update',
      newData,
    };
  }

  delete(id: number) {
    const indexDelete = this.brand.findIndex((element) => element.id === id);
    if (indexDelete === -1) {
      throw new NotFoundException(`brand #${id} not found`);
    }
    this.brand.splice(indexDelete, 1);
    return true;
  }
}
