import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config/dist/config.service";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly prisma: PrismaService, configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('SECRET'),
    });
  }

  async validate(payload: {
    sub: string;
    email: string;
  }) {
    const user = await this.prisma.usuario.findUnique({
      where: {
        id: payload.sub
      }
    })

    delete user.hash;

    return user;
  }
}