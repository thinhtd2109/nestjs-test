import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from 'src/services/category.repository';
import { BrandRepository } from 'src/services/brand.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, CategoryRepository, BrandRepository]
})
export class ProductModule { }
