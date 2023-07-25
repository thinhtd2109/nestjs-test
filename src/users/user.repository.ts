import { Injectable } from "@nestjs/common";
import { SignUpDto, SignUpUserInfoDto } from "dto/user.dto";
import { Transaction } from "sequelize";
import { UserInfo } from "src/models/users/user-info.model";
import { User } from "src/models/users/user.model";

@Injectable()
export class UserRepository {
    constructor() { }
    async getUserById(id: string): Promise<User> {
        return await User.findByPk(id)
    }
    async findByUserName(userName: string): Promise<User> {
        return await User.findOne({ where: { userName: userName } });
    }
    async updateUserCountSignIn(count: number, id: string) {
        return await User.update({
            qty_fail: count
        }, {
            where: {
                id: id
            }
        })
    }
    async updateUserActive(id: string, active: boolean) {
        return await User.update({
            isActive: active
        }, {
            where: {
                id: id
            }
        });
    }

    async createUser(userDto: SignUpDto, transaction: Transaction) {
        return await User.create({
            userName: userDto.username,
            passwordHash: userDto.password,
            email: userDto.email
        }, { transaction })
    }

    async createUserInfo(userId: string, userInfo: SignUpUserInfoDto, transaction: Transaction) {
        return await UserInfo.create({
            birthDay: userInfo.birth_day,
            user: userId,
            fullName: userInfo.full_name,
            phone: userInfo.phone
        }, { transaction });
    }
}