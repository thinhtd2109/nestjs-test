import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/users/user.module';
import { UsersService } from './modules/users/user.service';
import { ProductModule } from './modules/product/product.module';
import { UsersController } from './modules/users/users.controller';
import { UserRepository } from './modules/users/user.repository';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { ProductValidateMiddleware } from './middleware/product.middleware';
import { CommentValidateMiddleware } from './middleware/comment.middleware';
import { UserValidateMiddleware } from './middleware/user.middleware';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    ProductModule,
    AuthModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.secret_key
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
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
      .apply(UserValidateMiddleware)
      .forRoutes({ path: 'auth/signup', method: RequestMethod.POST })
  }
}
