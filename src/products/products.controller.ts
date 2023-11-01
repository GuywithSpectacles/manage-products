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

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductData: CreateProductDTO) {
    return await this.productService.createProduct(createProductData);
  }

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return await this.productService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Body() updateProductData: CreateProductDTO,
    @Param('id') id: string,
  ) {
    return await this.productService.updateProduct(id, updateProductData);
  }

  @Delete()
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
