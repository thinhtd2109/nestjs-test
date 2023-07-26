import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<any> {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse() as Response;
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            return response.send({ status: false, error: `Xác thực thất bại, kiểm tra lại`, data: null })
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: process.env.secret_key
                }
            );
            request['user'] = payload;
        } catch {
            return response.send({ status: false, error: `Xác thực thất bại, kiểm tra lại`, data: null })
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}