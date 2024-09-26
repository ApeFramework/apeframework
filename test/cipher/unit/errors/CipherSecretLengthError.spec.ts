import { CipherSecretLengthError } from 'cipher/errors/CipherSecretLengthError'

describe('creating a secret length error', () => {
  test('returns expected value', async () => {
    const error = new CipherSecretLengthError()

    expect(error.message).toBe('invalid secret length')
  })
})
