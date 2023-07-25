import { SignUpDto } from "dto/user.dto"

export const validateSignIn = (username: string, password: string) => {
    if (!username || username == '') {
        return {
            status: false,
            error: `Tên đăng nhập không được để trống, kiểm tra lại.`,
            data: null
        }
    }
    if (!password || password == '') {
        return {
            status: false,
            error: `Mật khẩu không được để trống, kiểm tra lại.`,
            data: null
        }
    }

    return {
        status: true,
        data: null,
        error: null
    }
}

export const validateSignUp = (data: SignUpDto) => {
    if (!data.user_info.birth_day) {
        return {
            status: false,
            error: `Vui lòng nhập ngày sinh.`,
            data: null
        }
    }
    if (!data.user_info.full_name) {
        return {
            status: false,
            error: `Vui lòng nhập họ tên.`,
            data: null
        }
    }
    if (!data.user_info.phone) {
        return {
            status: false,
            error: `Vui lòng nhập số điện thoại.`,
            data: null
        }
    }
    if (!data.password) {
        return {
            status: false,
            error: `Vui lòng nhập mật khẩu.`,
            data: null
        }
    }
    if (!data.email) {
        return {
            status: false,
            error: `Vui lòng nhập email.`,
            data: null
        }
    }
    if (!data.username) {
        return {
            status: false,
            error: `Vui lòng nhập tên người dùng.`,
            data: null
        }
    }

    return {
        status: true,
        data: null,
        error: null
    }
}