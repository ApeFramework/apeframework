import { Algorithm } from 'jwt/Algorithm'
import { Jwt } from 'jwt/Jwt'

describe('creating a jwt using the hs256 algorithm', () => {
  test('succeeds', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    expect(jwt).toBeInstanceOf(Jwt)
  })
})

describe('creating a jwt using the hs384 algorithm', () => {
  test('succeeds', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS384,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    expect(jwt).toBeInstanceOf(Jwt)
  })
})

describe('creating a jwt using the hs512 algorithm', () => {
  test('succeeds', async () => {
    const jwt = new Jwt({
      algorithm: Algorithm.HS512,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\
xxxxxxxxxxxxxxxx',
      issuer: 'issuer',
      audience: 'audience',
    })

    expect(jwt).toBeInstanceOf(Jwt)
  })
})
