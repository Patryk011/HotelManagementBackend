import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtKeycloakStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  providers: [JwtKeycloakStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
