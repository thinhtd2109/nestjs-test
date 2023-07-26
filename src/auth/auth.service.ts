import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/user.repository';
import { UsersService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';

import * as  _ from 'lodash';
import { SignUpDto } from 'dto/user.dto';
import sequelize from 'src/core/database/database.root';

import { validateSignIn } from 'src/core/validate/user.validate';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) { }

    async signIn(username: string, password: string) {
        const transaction = await sequelize.transaction();
        try {
            const validated = validateSignIn(username, password);
            if (!validated.status) {
                return validated;
            }
            const user = await this.userRepository.findByUserName(username);
            if (!user) {
                return {
                    status: false,
                    error: `Tên đăng nhập không hợp lệ, kiểm tra lại.`,
                    data: null
                }
            }
            const quantity_fail = user.qty_fail + 1;
            if (_.trim(user.passwordHash) !== _.trim(password)) {
                await this.userRepository.updateUserCountSignIn(quantity_fail, user.id, transaction);
                await transaction.rollback()
                return {
                    status: false,
                    error: `Mật khẩu không hợp lệ, kiểm tra lại.`,
                    data: null
                }
            };

            const { passwordHash, ...result } = user;
            delete result.dataValues.passwordHash;
            const payload = { data: result.dataValues };
            if (quantity_fail >= 3) {
                return {
                    status: false,
                    error: `Bạn đã đăng nhập thất bại 3 lần, vui lòng liên hệ để được hỗ trợ.`,
                    data: null
                }
            }
            await this.userRepository.updateUserCountSignIn(0, user.id, transaction);
            await this.userRepository.updateLoginDate(user.id, transaction);
            transaction.commit();
            return {
                access_token: await this.jwtService.signAsync(payload),
            }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async signUp(data: SignUpDto) {
        const transaction = await sequelize.transaction();
        try {

            const user = await this.userRepository.findByUserName(data.username);
            if (user) {
                return {
                    status: false,
                    error: `Tài khoản đã tồn tại, kiểm tra lại.`,
                    data: null
                }
            }
            const newUser = await this.userRepository.createUser(data, transaction);
            const newUserInfo = await this.userRepository.createUserInfo(newUser.id, data.user_info, transaction);

            await transaction.commit();
            return {
                status: true,
                data: {
                    ...newUser.dataValues,
                    userInfo: newUserInfo
                },
                error: null
            }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
