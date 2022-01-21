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
import { ParseIntPipe } from '../common/parse-int.pipe';
import { BrandService } from '../services/brand.service';
import { CreateBrandDto, UpdateBranDto } from '../dtos/brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}
  @Get(':brandId')
  getBrand(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandService.findOne(brandId);
  }
  @Get()
  getAllBrand(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query() brand: string,
  ) {
    return this.brandService.findAll();
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    /* return {
      message: 'crear brand',
      payload,
    }; */
    return this.brandService.create(payload);
  }

  @Put(':id')
  upDateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBranDto,
  ) {
    return this.brandService.update(id, payload);
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.delete(id);
  }
}
