
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ProductInputDto } from 'dto/products/product.dto';
import { Request, Response, NextFunction } from 'express';
import { validateBody } from 'src/core/validate/common.validate';

@Injectable()
export class ProductValidateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const body = req.body as ProductInputDto;
    const obj = {
      brand_code: 'Sản phẩm phải có thương hiệu.',
      category_code: 'Sản phẩm phải có danh mục.',
      code: 'Mã sản phẩm không hợp lệ.'
    }
    const validated = validateBody(body, obj);
    console.log(validated)
    if (!validated.status) {
      return res.send(validated);
    }
    next();
  }
}
