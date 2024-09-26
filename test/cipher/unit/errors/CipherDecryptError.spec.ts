import { CipherDecryptError } from 'cipher/errors/CipherDecryptError'

describe('creating a decrypt error', () => {
  test('returns expected value', async () => {
    const error = new CipherDecryptError('MESSAGE')

    expect(error.message).toBe('failed decrypting string: MESSAGE')
  })
})
