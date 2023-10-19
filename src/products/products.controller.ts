import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(): string {
    return 'These are all Products';
  }

  @Get()
  findOne(@Param('id') id): string {
    return `This is a string with the id: ${id}`;
  }

  @Post()
  create(@Body() createProductDTO: CreateProductDTO): string {
    return `
    Name: ${createProductDTO.genericName}
    Brand: ${createProductDTO.brand}
    Code: ${createProductDTO.code}
    Group: ${createProductDTO.group}
    Cost: ${createProductDTO.cost}
    Price: ${createProductDTO.price}
    UnitOfMearure: ${createProductDTO.unitOfMearure}
    PackingType: ${createProductDTO.packingType}
    barCode: ${createProductDTO.barCode}
    `;
  }

  @Delete()
  delete(@Param('id') id): string {
    return `Product is deleted ${id}`;
  }

  @Put()
  update(@Body() createProductDTO: CreateProductDTO, @Param('id') id): string {
    return `
    Update ${id} -
    Name: ${createProductDTO.genericName}
    Brand: ${createProductDTO.brand}
    Code: ${createProductDTO.code}
    Group: ${createProductDTO.group}
    Cost: ${createProductDTO.cost}
    Price: ${createProductDTO.price}
    UnitOfMearure: ${createProductDTO.unitOfMearure}
    PackingType: ${createProductDTO.packingType}
    barCode: ${createProductDTO.barCode}
    `;
  }
}
