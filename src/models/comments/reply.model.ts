import { Column, Model, Table, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import Comment from './comment.model';
import { User } from '../users/user.model';

@Table({ timestamps: false, underscored: true })
export class Reply extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  id: string;

  @ForeignKey(() => Comment)
  @Column({ type: DataType.UUID })
  commentId: string;

  @Column
  commentText: string;

  @BelongsTo(() => Comment)
  comment: Comment;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  deleted: Boolean;

  @Column({ type: DataType.DATE })
  updated: Date;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  createdBy: string;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.UUID })
  updatedBy: string;

  @Column({ type: DataType.UUID })
  deletedBy: string;
}

export default Reply;