import { Module } from '@nestjs/common';
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
export class AppModule { }
