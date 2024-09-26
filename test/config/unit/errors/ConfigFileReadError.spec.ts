import { ConfigFileReadError } from 'config/errors/ConfigFileReadError'

describe('creating a file read error', () => {
  test('returns expected value', async () => {
    const error = new ConfigFileReadError('PATH', 'MESSAGE')

    expect(error.message).toBe('failed reading file "PATH": MESSAGE')
  })
})
