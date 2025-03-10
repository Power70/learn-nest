import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  // inject the product service in order to use it here
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
  @Get(':id')
  getproduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
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
