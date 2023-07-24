import { Column, Table, DataType, BelongsTo, ForeignKey, Model } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./user.model";

@Table({ timestamps: false, underscored: true })
export class UserInfo extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
        allowNull: false,
        unique: true
    })
    id: string;
    @Column({ allowNull: false })
    phone: string;

    @Column({ allowNull: false })
    fullName: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    userId: string

    @BelongsTo(() => User)
    user: User

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    created: Date

    @Column({ type: DataType.DATE })
    birthDay: Date

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
