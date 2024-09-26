import { SignJWT, jwtVerify } from 'jose'
import { validateSecretLength } from './validateSecretLength'
import type { Algorithm } from './Algorithm'
import type { Payload } from './Payload'

class Jwt {
  private readonly algorithm: Algorithm

  private readonly secret: Uint8Array

  private readonly issuer: string

  private readonly audience: string

  private readonly expiration: number | undefined

  public constructor(params: {
    algorithm: Algorithm,
    secret: string,
    issuer: string,
    audience: string,
    expiration?: number,
  }) {
    validateSecretLength(params.algorithm, params.secret)

    this.algorithm = params.algorithm
    this.secret = new TextEncoder().encode(params.secret)
    this.issuer = params.issuer
    this.audience = params.audience
    this.expiration = params.expiration
  }

  public async createToken(payload: Payload): Promise<string> {
    const jwt = new SignJWT(
      Object.fromEntries(
        Object.entries(payload).filter(([key]) => {
          return !['subject', 'issuedAt', 'id'].includes(key)
        }),
      ),
    )

    jwt
      .setProtectedHeader({ typ: 'JWT', alg: this.algorithm })
      .setIssuer(this.issuer)
      .setAudience(this.audience)
      .setSubject(payload.subject)
      .setIssuedAt(payload.issuedAt)

    if (this.expiration) {
      jwt.setExpirationTime(payload.issuedAt + this.expiration)
    }

    if (payload.id) {
      jwt.setJti(payload.id)
    }

    return jwt.sign(this.secret)
  }

  public async verifyToken<Type extends Payload>(
    token: string,
    timestamp: number,
  ): Promise<Type | undefined> {
    try {
      const { payload: jwt } = await jwtVerify(token, this.secret, {
        typ: 'JWT',
        algorithms: [this.algorithm],
        audience: this.audience,
        currentDate: new Date(timestamp * 1000),
      })

      const payload = Object.fromEntries(
        Object.entries(jwt).filter(([key]) => {
          return !['iss', 'aud', 'sub', 'iat', 'exp', 'jti'].includes(key)
        }),
      )

      return {
        subject: jwt.sub,
        issuedAt: jwt.iat,
        ...jwt.jti ? { id: jwt.jti } : {},
        ...payload,
      } as Type
    } catch (error) {
      return undefined
    }
  }
}

export {
  Jwt,
}
