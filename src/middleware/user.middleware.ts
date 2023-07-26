
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ProductInputDto } from 'dto/products/product.dto';
import { Request, Response, NextFunction } from 'express';
import { validateBody } from 'src/core/validate/common.validate';

@Injectable()
export class UserValidateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const body = req.body as ProductInputDto;
    const object = {
      email: 'Vui lòng nhập email.',
      username: `Vui lòng nhập tên tài khoản.`,
      password: 'Vui lòng nhập mật khẩu.',
      user_info: {
        birth_day: `Vui lòng nhập ngày sinh.`,
        full_name: `Vui lòng nhập họ tên.`,
        phone: `Vui lòng nhập số điện thoại.`,
      }
    }
    const validated = validateBody(body, object);
    if (!validated.status) {
      return res.send(validated);
    }
    next();
  }
}
