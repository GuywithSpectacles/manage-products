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
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Product {
    return this.productService.findOne(id);
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

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Product is deleted ${id}`;
  }

  @Put(':ID')
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
