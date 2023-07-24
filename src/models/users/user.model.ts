import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { UserInfo } from './user-info.model';

@Table({ timestamps: false, underscored: true })
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  id: string
  @Column({ allowNull: false, unique: true })
  userName: string;
  @Column({ allowNull: false, unique: true })
  email: string;
  @Column({ allowNull: false })
  passwordHash: string;
  @Column({ type: DataType.DATE })
  dateRegistered: Date;
  @Column({ type: DataType.DATE })
  lastLogin: Date;
  @Column
  isActive: boolean;
  @Column({ defaultValue: false })
  blocked: boolean;
  @Column
  qty_fail: number;
  @HasMany(() => UserInfo)
  userInfos: UserInfo[]
  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created: Date
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