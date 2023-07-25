import { Injectable, Post } from '@nestjs/common';
import { ProductInputDto } from 'dto/products/product.dto';

@Injectable()
export class ProductService {
  async insertProduct(data: ProductInputDto) {

  }
}
