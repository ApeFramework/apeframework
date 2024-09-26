import { Algorithm } from 'jwt/Algorithm'
import { Jwt } from 'jwt/Jwt'

describe('verifying a token', () => {
  test('returns expected value', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    const token = await jwt.createToken({
      subject: 'subject',
      issuedAt: 0,
      id: 'id',
      foo: 'foo',
      bar: 'bar',
    })

    const payload = await jwt.verifyToken(token, 0)

    expect(payload).toStrictEqual({
      subject: 'subject',
      issuedAt: 0,
      id: 'id',
      foo: 'foo',
      bar: 'bar',
    })
  })
})

describe('verifying a token using a mismatching algorithm', () => {
  test('returns expected value', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    const mismatchJwt = new Jwt({
      algorithm: Algorithm.HS384,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    const token = await jwt.createToken({
      subject: 'subject',
      issuedAt: 0,
    })

    const payload = await mismatchJwt.verifyToken(token, 0)

    expect(payload).toBeUndefined()
  })
})

describe('verifying a token using a mismatching secret', () => {
  test('returns expected value', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    const mismatchJwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      issuer: 'issuer',
      audience: 'audience',
    })

    const token = await jwt.createToken({
      subject: 'subject',
      issuedAt: 0,
    })

    const payload = await mismatchJwt.verifyToken(token, 0)

    expect(payload).toBeUndefined()
  })
})

describe('verifying a token using a mismatching audience', () => {
  test('returns expected value', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    const mismatchJwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'mismatchAudience',
    })

    const token = await jwt.createToken({
      subject: 'subject',
      issuedAt: 0,
    })

    const payload = await mismatchJwt.verifyToken(token, 0)

    expect(payload).toBeUndefined()
  })
})

describe('verifying a token using an expiration period', () => {
  test('returns expected value', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
      expiration: 60,
    })

    const token = await jwt.createToken({
      subject: 'subject',
      issuedAt: 0,
    })

    const payload1 = await jwt.verifyToken(token, 59)
    const payload2 = await jwt.verifyToken(token, 61)

    expect(payload1).toStrictEqual({
      subject: 'subject',
      issuedAt: 0,
    })

    expect(payload2).toBeUndefined()
  })
})
