import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from 'src/models/users/user.model';
import { UserInfo } from 'src/models/users/user-info.model';
import Comment from 'src/models/comments/comment.model';
import ProductComment from 'src/models/comments/product-comment.model';
import Brand from 'src/models/master/brand.model';
import Category from 'src/models/master/category.model';
import Reply from 'src/models/comments/reply.model';
import Product from 'src/models/products/product.model';

export const databaseProviders = [{
  provide: SEQUELIZE,
  useFactory: async () => {
    let config;
    switch (process.env.NODE_ENV) {
      case DEVELOPMENT:
        config = databaseConfig.development;
        break;
      case TEST:
        config = databaseConfig.test;
        break;
      case PRODUCTION:
        config = databaseConfig.production;
        break;
      default:
        config = databaseConfig.development;
    }
    const sequelize = new Sequelize(config);
    sequelize.addModels([User, UserInfo, Comment, Product, ProductComment, Brand, Category, Reply]);
    await sequelize.sync();
    return sequelize;
  },
}];