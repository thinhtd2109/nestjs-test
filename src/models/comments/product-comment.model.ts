import { Column, Model, Table, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Comment from './comment.model';
import Product from '../products/product.model';

@Table({ timestamps: false, underscored: true })
export class ProductComment extends Model {
  @Column({ autoIncrement: true, primaryKey: true, allowNull: false, unique: true })
  id: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.UUID })
  productId: string;

  @ForeignKey(() => Comment)
  @Column({ type: DataType.UUID })
  commentId: string;

  @BelongsTo(() => Product)
  product: Product;

  @BelongsTo(() => Comment)
  comment: Comment;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: Boolean;

  @Column({ type: DataType.DATE })
  updated: Date;

  @Column({ type: DataType.UUID })
  updatedBy: string;

  @Column({ type: DataType.UUID })
  deletedBy: string;
}

export default ProductComment;