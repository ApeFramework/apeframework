import { DecryptError } from 'cipher/errors/DecryptError'

describe('creating a decrypt error', () => {
  test('returns expected value', async () => {
    const error = new DecryptError('MESSAGE')

    expect(error.message).toBe('failed decrypting string: MESSAGE')
  })
})
