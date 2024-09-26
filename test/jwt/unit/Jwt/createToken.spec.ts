import { Algorithm } from 'jwt/Algorithm'
import { Jwt } from 'jwt/Jwt'
import { isValidJwtToken } from 'utils/isValidJwtToken'

describe('creating a token', () => {
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
    })

    expect(isValidJwtToken(token)).toBe(true)
  })
})

describe('creating a token using different issuance timestamps', () => {
  test('returns expected value', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    const token1 = await jwt.createToken({
      subject: 'subject',
      issuedAt: 1,
    })

    const token2 = await jwt.createToken({
      subject: 'subject',
      issuedAt: 2,
    })

    const token3 = await jwt.createToken({
      subject: 'subject',
      issuedAt: 3,
    })

    expect(isValidJwtToken(token1)).toBe(true)
    expect(isValidJwtToken(token2)).toBe(true)
    expect(isValidJwtToken(token3)).toBe(true)

    expect(token1).not.toStrictEqual(token2)
    expect(token1).not.toStrictEqual(token3)
  })
})
