import { Body, Controller, Post } from '@nestjs/common';
import { ProductInputDto } from 'dto/products/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @Post('insert')
  async insertProduct(@Body() data: ProductInputDto) {
    return await this.productService.insertProduct(data)
  }
}
