import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './users.controller';
import moment from 'moment';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: 'MomentWrapper', useValue: moment }],
})
export class UserModule { }