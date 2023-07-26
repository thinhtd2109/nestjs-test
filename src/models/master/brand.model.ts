import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import Product from '../products/product.model';

@Table({ timestamps: false, underscored: true })
export class Brand extends Model {
  @Column({ autoIncrement: true, primaryKey: true, allowNull: false, unique: true })
  id: number;

  @Column({ unique: true, allowNull: false })
  code: string;

  @Column({ allowNull: false })
  name: string;

  @HasMany(() => Product)
  products: Product[];

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

export default Brand;
