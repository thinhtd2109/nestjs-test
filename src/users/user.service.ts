import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly posts = [];

  create(post) {
    this.posts.push(post);
  }

  findAll() {
    return this.posts;
  }
}