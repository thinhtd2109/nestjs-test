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
