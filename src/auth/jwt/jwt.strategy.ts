import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';
import { KeycloakToken } from './jwt.types';

@Injectable()
export class JwtKeycloakStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri:
          'http://localhost:8080/realms/hotel/protocol/openid-connect/certs',
      }),

      issuer: `http://localhost:8080/realms/hotel`,
      algorithms: ['RS256'],
    });
  }

  validate(payload: KeycloakToken) {
    return {
      userId: payload.sub,
      username: payload.preferred_username,
      email: payload.email,
      roles: payload.realm_access?.roles || [],
    };
  }
}
