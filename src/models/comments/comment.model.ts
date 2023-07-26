import { Column, Model, Table, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../users/user.model';
import Reply from './reply.model';
import ProductComment from './product-comment.model';

@Table({ timestamps: false, underscored: true })
export class Comment extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  id: string;

  @Column
  commentText: string;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: Boolean;

  @Column({ type: DataType.DATE })
  updated: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  createdBy: string;

  @HasMany(() => Reply)
  replies: Reply[]

  @BelongsTo(() => User)
  createdByUser: User;

  @HasMany(() => ProductComment)
  product_comments: ProductComment[]

  @Column({ type: DataType.UUID })
  updatedBy: string;

  @Column({ type: DataType.UUID })
  deletedBy: string;
}

export default Comment;