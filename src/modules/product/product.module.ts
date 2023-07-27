import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { BrandRepository } from 'src/services/providers/brand.repository';
import { UserRepository } from 'src/modules/users/user.repository';
import { CategoryRepository } from 'src/services/providers/category.repository';
import { CommentRepository } from 'src/services/providers/comment.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, CategoryRepository, BrandRepository, UserRepository, CommentRepository]
})
export class ProductModule { }
