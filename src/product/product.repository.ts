import { Injectable } from "@nestjs/common";
import { ProductFilterDto, ProductInsertDto } from "dto/products/product.dto";
import { Transaction } from "sequelize";
import { isEmpty } from "src/core/helper/user.helper";
import Comment from "src/models/comments/comment.model";
import ProductComment from "src/models/comments/product-comment.model";
import Reply from "src/models/comments/reply.model";
import Product from "src/models/products/product.model";
import { UserInfo } from "src/models/users/user-info.model";
import { User } from "src/models/users/user.model";

@Injectable()
export class ProductRepository {
    constructor() { }
    buildConditionProduct(data: ProductFilterDto) {
        const where = {};
        if (!isEmpty(data.code)) {
            where['code'] = data.code;
        }
        return where;
    }
    async getProductBy(data: ProductFilterDto): Promise<Product> {
        const where = this.buildConditionProduct(data);
        return await Product.findOne({
            where: where, include: [{
                model: ProductComment,
                include: [{
                    model: Comment,
                    include: [
                        {
                            model: User,
                            include: [{
                                model: UserInfo
                            }]
                        },
                        {
                            model: Reply,
                            include: [{
                                model: User,
                                include: [{
                                    model: UserInfo
                                }]
                            }]
                        }
                    ]
                }]
            }]
        });
    }

    async upsertProduct(data: ProductInsertDto, transaction: Transaction) {
        return await Product.upsert({
            code: data.code,
            name: data.name,
            category_id: data.category_id,
            brand_id: data.brand_id,
            description: data.description,
            price: data.price
        }, {
            returning: true,
            conflictFields: ['code']
        })
    }
}