import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  readonly logo: string;
}

export class UpdateBranDto extends PartialType(CreateBrandDto) {}
