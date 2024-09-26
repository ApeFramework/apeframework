import { EnvFileReadError } from 'env/errors/EnvFileReadError'

describe('creating a file read error', () => {
  test('returns expected value', async () => {
    const error = new EnvFileReadError('PATH', 'MESSAGE')

    expect(error.message).toBe('failed reading file "PATH": MESSAGE')
  })
})
