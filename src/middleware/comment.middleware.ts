
import { Injectable, NestMiddleware } from '@nestjs/common';
import { CommentInputDto } from 'dto/comments/comment.dto';
import { ProductInputDto } from 'dto/products/product.dto';
import { Request, Response, NextFunction } from 'express';
import { validateBody } from 'src/core/validate/common.validate';

@Injectable()
export class CommentValidateMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const body = req.body as CommentInputDto;
        const obj = {
            product_code: 'Sản phẩm không hợp lệ.',
            user_id: 'Người dùng không hợp lệ.'
        }
        const validated = validateBody(body, obj);
        if (!validated.status) {
            return res.send(validated);
        }
        next();
    }
}
