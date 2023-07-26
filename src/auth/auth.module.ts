import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/user.service';
import { UserRepository } from 'src/users/user.repository';
import moment from 'moment';
@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, UserRepository, { provide: 'MomentWrapper', useValue: moment },]
})
export class AuthModule { }
