import { JwtSecretLengthError } from 'jwt/errors/JwtSecretLengthError'

describe('creating a secret length error', () => {
  test('returns expected value', async () => {
    const error = new JwtSecretLengthError()

    expect(error.message).toBe('invalid secret length')
  })
})
