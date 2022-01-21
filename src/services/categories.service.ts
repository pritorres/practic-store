import { Injectable, NotFoundException } from '@nestjs/common';
import { Categories } from '../entitis/categories.entity';
import { CreateCategorie, UpdateCategories } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Categories[] = [
    {
      id: 1,
      name: 'producto 1',
      stock: 100,
    },
  ];

  findAll() {
    const categories = this.categories;
    return categories;
  }

  findOne(id: number) {
    const categorie = this.categories.find((item) => item.id == id);
    return categorie;
  }

  create(payload: CreateCategorie) {
    this.counterId += 1;
    const newCategorie = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategorie);
    return newCategorie;
  }

  update(id: number, payload: UpdateCategories) {
    const categorieUpdate = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    const newData = {
      ...payload,
      ...categorieUpdate,
    };
    this.categories.splice(index, 1, newData);
    return newData;
  }

  delete(id: number) {
    const categorieDelete = this.categories.findIndex((item) => item.id === id);
    if (categorieDelete === -1) {
      throw new NotFoundException(`categories #${id} not found`);
    }
    this.categories.slice(categorieDelete, 1);
    return true;
  }
}
