import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductInputDto } from 'dto/products/product.dto';
import { ProductService } from './product.service';
import { CommentInputDto } from 'dto/comments/comment.dto';
import { AuthGuard } from 'src/auth/auth.guards';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) { }
  @Post('insert')
  @UseGuards(AuthGuard)
  async insertProduct(@Body() data: ProductInputDto) {
    return await this.productService.insertProduct(data)
  }
  @Get(':code')
  async getProductByCode(@Param('code') code: string) {
    return await this.productService.getProductByCode(code);
  }
  @Post('comment')
  @UseGuards(AuthGuard)
  async commentProduct(@Body() data: CommentInputDto) {
    return await this.productService.commentProduct(data);
  }

  @Post('comment/delete/:id')
  @UseGuards(AuthGuard)
  async deleteComment(@Param('id') id: string) {
    return await this.productService.deleteComment(id);
  }
}
