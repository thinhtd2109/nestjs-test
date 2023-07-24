export class SignInDto {
    username: string;
    password: string;
}

export class SignUpDto {
    username: string;
    email: string;
    password: string;
    user_info: SignUpUserInfoDto
}

export class SignUpUserInfoDto {
    phone: string;
    full_name: string;
    birth_day: string;
}