import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  // create a property name product and assign  a type of product
  private product: Product[] = [];
  // create a method to insert the product
  insertProduct(title: string, desc: string, price: number) {
    // pass the id dynamically
    const id = new Date().toString();
    // create new product instance
    const newProduct = new Product(id, title, desc, price);
    // add the product
    this.product.push(newProduct);
    return id;
  }
  getProducts() {
    return [...this.product];
  }
}
