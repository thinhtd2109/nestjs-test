import { Injectable } from "@nestjs/common";
import Category from "src/models/master/category.model";

@Injectable()
export class CategoryRepository {
    constructor() { }
    async getCategoryByCode(code: string) {
        return await Category.findOne({ where: { code: code } });
    }
}