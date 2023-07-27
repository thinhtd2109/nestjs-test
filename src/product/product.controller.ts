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
    return await this.productService.upsertProduct(data)
  }
  @Post('edit')
  async editProduct(@Body() data: ProductInputDto) {
    return await this.productService.upsertProduct(data);
  }
  @Get()
  async getProductBy(@Body() where: any) {
    return await this.productService.getProductBy(where);
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

  @Post('comment/delete')
  @UseGuards(AuthGuard)
  async deleteComment(@Body() body: any) {
    return await this.productService.deleteComment(body?.id);
  }
}
