import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCategorie, UpdateCategories } from '../dtos/categories.dto';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  @Get()
  getAllCategories(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query() brand: string,
  ) {
    return this.categoriesService.findAll();
  }
  @Get(':productId')
  getCategories(@Param('productId', ParseIntPipe) productId: number) {
    return this.categoriesService.findOne(productId);
  }

  @Post()
  createCategories(@Body() payload: CreateCategorie) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  updateCategorie(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategories,
  ) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }
}
