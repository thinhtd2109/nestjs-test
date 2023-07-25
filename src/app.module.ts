import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './users/user.module';
import { UsersService } from './users/user.service';
import { ProductModule } from './product/product.module';
import { UsersController } from './users/users.controller';
import { UserRepository } from './users/user.repository';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { ProductValidateMiddleware } from './middleware/product.middleware';
import { CommentValidateMiddleware } from './middleware/comment.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService, UsersService, UserRepository, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ProductValidateMiddleware)
      .forRoutes({ path: 'product/insert', method: RequestMethod.POST })
      .apply(CommentValidateMiddleware)
      .forRoutes({ path: 'product/comment', method: RequestMethod.POST })
  }
}
