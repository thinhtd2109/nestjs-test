import { Injectable } from "@nestjs/common";
import Brand from "src/models/master/brand.model";

@Injectable()
export class BrandRepository {
  constructor() { }
  async getBrandByCode(code: string) {
    return await Brand.findOne({ where: { code: code } });
  }
}