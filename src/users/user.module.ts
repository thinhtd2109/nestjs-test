import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import moment from 'moment';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: 'MomentWrapper', useValue: moment }],
})
export class PostsModule { }