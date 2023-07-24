import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/user.service';
import { UserRepository } from 'src/users/user.repository';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.secret_key
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, UserRepository]
})
export class AuthModule { }
