import { Injectable, Post } from '@nestjs/common';
import { ProductInputDto, ProductInsertDto } from 'dto/products/product.dto';
import { ProductRepository } from './product.repository';
import sequelize from 'src/core/database/database.root';
import { CategoryRepository } from 'src/services/category.repository';
import { BrandRepository } from 'src/services/brand.repository';
import { validateCommentProduct, validateMasterDataInsertProduct } from 'src/core/validate/product.validate';
import Category from 'src/models/master/category.model';
import Brand from 'src/models/master/brand.model';
import { CommentInputDto } from 'dto/comments/comment.dto';
import { UserRepository } from 'src/users/user.repository';
import { CommentRepository } from 'src/services/comment.repository';
import { isEmpty } from 'src/core/helper/user.helper';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly brandRepository: BrandRepository,
    private readonly userRepository: UserRepository,
    private readonly commentRepository: CommentRepository
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

  async getProductBy(where) {
    const results = await this.productRepository.getProductsBy(where);
    return {
      status: true,
      error: null,
      data: results
    };
  }

  async upsertProduct(data: ProductInputDto) {
    const transaction = await sequelize.transaction();
    try {
      const product = await this.productRepository.getProductBy({ code: data.code });
      const category = await this.categoryRepository.getCategoryByCode(data.category_code);
      const brand = await this.brandRepository.getBrandByCode(data.brand_code);
      const validated = validateMasterDataInsertProduct({ product, category, brand, is_insert: data.is_insert });
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

  async getProductByCode(code: string) {
    const result = await this.productRepository.getProductBy({ code });
    return {
      status: true,
      error: null,
      data: result
    }
  }

  async commentProduct(data: CommentInputDto) {
    let result;
    const transaction = await sequelize.transaction();
    const product = await this.productRepository.getProductBy({ code: data.product_code });
    const user = await this.userRepository.getUserById(data.user_id);
    const validated = validateCommentProduct({ product, user });
    if (!validated.status) {
      return validated;
    }

    try {
      if (!isEmpty(data.reply_comment)) {
        result = await this.commentRepository.insertReplyComment(data, transaction);
        await transaction.commit();
      } else {
        result = await this.commentRepository.insertComment({ user_id: user.id, comment_text: data.comment_text, product_id: product.id }, transaction);
        await transaction.commit();
      }

      return {
        status: true,
        data: result,
        error: null
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  async deleteComment(id: string) {
    const transaction = await sequelize.transaction();
    const comment = await this.commentRepository.getCommentById(id);
    const reply = await this.commentRepository.getReplyCommentById(id);
    try {
      if (!isEmpty(comment)) {
        await this.commentRepository.deleteComment(comment.id, transaction);
      } else {
        await this.commentRepository.deleteReplyComment(reply.id, transaction);
      }

      await transaction.commit();
      return {
        status: true,
        error: `Xóa thành công.`,
        data: null
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
