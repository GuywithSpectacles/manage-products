import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: '1',
      genericName: 'West Blue',
      brand: 'asdsadsa545sda',
      code: 565654,
      group: 'sadsadsadwqewqdsacsa',
      cost: 441545415,
      price: 6516516161,
      unitOfMearure: 'sadsasad',
      packingType: 'sdsad',
      barCode: 'sadsad54541sadsad',
    },
    {
      id: '2',
      genericName: 'South Blue',
      brand: 'asdsadsa545sda',
      code: 565654,
      group: 'sadsadsadwqewqdsacsa',
      cost: 441545415,
      price: 6516516161,
      unitOfMearure: 'sadsasad',
      packingType: 'sdsad',
      barCode: 'sadsad54541sadsad',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find((product) => product.id === id);
  }
}
