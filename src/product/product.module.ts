import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from 'src/services/category.repository';
import { BrandRepository } from 'src/services/brand.repository';
import { UserRepository } from 'src/users/user.repository';
import { CommentRepository } from 'src/services/comment.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, CategoryRepository, BrandRepository, UserRepository, CommentRepository]
})
export class ProductModule { }
