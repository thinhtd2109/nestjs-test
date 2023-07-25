import { Injectable, Post } from '@nestjs/common';
import { ProductInputDto, ProductInsertDto } from 'dto/products/product.dto';
import { ProductRepository } from './product.repository';
import sequelize from 'src/core/database/database.root';
import { CategoryRepository } from 'src/services/category.repository';
import { BrandRepository } from 'src/services/brand.repository';
import { validateMasterDataInsertProduct } from 'src/core/validate/product.validate';
import Category from 'src/models/master/category.model';
import Brand from 'src/models/master/brand.model';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly brandRepository: BrandRepository
  ) { }

  generateDto(data: ProductInputDto, category: Category, brand: Brand): ProductInsertDto {
    return {
      code: data.code,
      name: data.name,
      description: data.description,
      category_id: category.id,
      brand_id: brand.id,
      price: data?.price ?? 0,
    }
  }

  async insertProduct(data: ProductInputDto) {
    const transaction = await sequelize.transaction();
    try {
      const product = await this.productRepository.getProductBy({ code: data.code });
      const category = await this.categoryRepository.getCategoryByCode(data.category_code);
      const brand = await this.brandRepository.getBrandByCode(data.brand_code);
      const validated = validateMasterDataInsertProduct({ product, category, brand });
      if (!validated.status) {
        return validated;
      };
      const productDto = this.generateDto(data, category, brand);
      const result = await this.productRepository.upsertProduct(productDto, transaction);
      transaction.commit();
      return {
        status: true,
        error: null,
        data: result[0]
      }

    } catch (error) {
      await transaction.rollback();
      throw error;
    }

  }
}
