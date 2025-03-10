import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  // create a property name product and assign  a type of product
  private product: Product[] = [];
  // create a method to insert the product
  insertProduct(title: string, desc: string, price: number) {
    // pass the id dynamically
    const id = Math.floor(Math.random() * Date.now()).toString(16);
    // create new product instance
    const newProduct = new Product(id, title, desc, price);
    // add the product
    this.product.push(newProduct);
    return id;
  }
  getProducts() {
    return [...this.product];
  }
//   get the products from the post routes
  getProduct(prodId: string) {
    const product = this.product.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { ...product };
  }
}
