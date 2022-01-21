import { PartialType } from '@nestjs/mapped-types';

export class CreateCategorie {
  name: string;
  stock: number;
  logo: string;
}

export class UpdateCategories extends PartialType(CreateCategorie) {}
