import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './users.controller';
import * as moment from 'moment';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: 'MomentWrapper', useValue: moment }, UserRepository],
  exports: [UsersService, UserRepository]
})
export class UserModule { } 