import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductInputDto } from 'dto/products/product.dto';
import { ProductService } from './product.service';
import { CommentInputDto } from 'dto/comments/comment.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }
  @Post('insert')
  async insertProduct(@Body() data: ProductInputDto) {
    return await this.productService.insertProduct(data)
  }
  @Get(':code')
  async getProductByCode(@Param('code') code: string) {
    return await this.productService.getProductByCode(code);
  }
  @Post('comment')
  async commentProduct(@Body() data: CommentInputDto) {
    return await this.productService.commentProduct(data);
  }
}
