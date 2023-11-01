import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import Config from '../config/keys';
import * as nano from 'nano';

@Injectable()
export class ProductsService {
  private db;

  constructor() {
    const couch = nano(Config.url); //Couchdb url
    this.db = couch.use('product'); // Database name
  }

  async createProduct(createProduct: CreateProductDTO) {
    try {
      const product = await this.db.insert(createProduct);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProducts() {
    try {
      const products = await this.db.list({ include_docs: true });
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProduct(id: string) {
    try {
      const product = await this.db.get(id);
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(id: string) {
    try {
      await this.db.delete(id);
      return `The product has been deleted`;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct(id: string, updateProduct) {
    try {
      let product = await this.db.get(id);
      if (product) {
        product = await this.db.insert({
          _id: product._id,
          _rev: product._rev,
          genericName: updateProduct.genericName
            ? updateProduct.genericName
            : product.genericName,
          brand: updateProduct.brand ? updateProduct.brand : product.brand,
          code: updateProduct.code ? updateProduct.code : product.code,
          group: updateProduct.group ? updateProduct.group : product.group,
          cost: updateProduct.cost ? updateProduct.cost : product.cost,
          price: updateProduct.price ? updateProduct.price : product.price,
          unitOfMearure: updateProduct.unitOfMearure
            ? updateProduct.unitOfMearure
            : product.unitOfMearure,
          packingType: updateProduct.packingType
            ? updateProduct.packingType
            : product.packingType,
          barCode: updateProduct.barCode
            ? updateProduct.barCode
            : product.barCode,
        });
        return product;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
