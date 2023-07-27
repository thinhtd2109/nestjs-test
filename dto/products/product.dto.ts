export class ProductInputDto {
  code: string;
  name: string;
  price: number;
  description: string;
  brand_code: string;
  category_code: string;
  is_insert: boolean;
}

export class ProductInsertDto {
  code: string;
  name: string;
  category_id: number;
  brand_id: number;
  description: string;
  price: number;
}

export class ProductFilterDto {
  code: string;
}