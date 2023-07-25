import { Column, Model, Table, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import Brand from '../master/brand.model';
import Category from '../master/category.model';
import ProductComment from '../comments/product-comment.model';

@Table({ timestamps: false, underscored: true })
export class Product extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  id: string;

  @Column({ unique: true })
  code: string;

  @Column
  name: string;

  @Column({ allowNull: false })
  price: number;

  @Column
  description: string;

  @ForeignKey(() => Brand)
  @Column
  brandId: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Brand)
  brand: Brand;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => ProductComment)
  comments: ProductComment[]

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: Boolean;

  @Column({ type: DataType.DATE })
  updated: Date;

  @Column({ type: DataType.UUID })
  createdBy: string;

  @Column({ type: DataType.UUID })
  updatedBy: string;

  @Column({ type: DataType.UUID })
  deletedBy: string;
}