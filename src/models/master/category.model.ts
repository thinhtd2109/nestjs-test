import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import Product from '../products/product.model';

@Table({ timestamps: false, underscored: true })
export class Category extends Model {
  @Column({ primaryKey: true, autoIncrement: true, unique: true, allowNull: false })
  id: number;

  @Column({ unique: true, allowNull: false })
  code: string

  @Column({ allowNull: false })
  name: string;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created: Date;

  @HasMany(() => Product)
  products: Product[];

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

export default Category;