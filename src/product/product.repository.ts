import { Injectable } from "@nestjs/common";
import { ProductFilterDto, ProductInputDto, ProductInsertDto } from "dto/products/product.dto";
import { Transaction } from "sequelize";
import { Table } from "sequelize-typescript";
import { isEmpty } from "src/core/helper/user.helper";
import Product from "src/models/products/product.model";

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
        return await Product.findOne({ where: where });
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