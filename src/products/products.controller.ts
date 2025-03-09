import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  // inject the product service in order to use it here
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
  @Post()
  addProducts(
    @Body('title') pTitle: string,
    @Body('description') pDesc: string,
    @Body('price') pPrice: number,
  ) {
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);
    return { id: returnedId };
  }
}
