import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from 'dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/signIn')
    async signIn(@Body() body: SignInDto) {
        const { username, password } = body;
        return await this.authService.signIn(username, password);
    }
    @Post('signUp')
    async signUp(@Body() body: SignUpDto) {
        return await this.authService.signUp(body);
    }
}
