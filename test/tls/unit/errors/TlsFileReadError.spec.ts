import { TlsFileReadError } from 'tls/errors/TlsFileReadError'

describe('creating a file read error', () => {
  test('returns expected value', async () => {
    const error = new TlsFileReadError('PATH', 'MESSAGE')

    expect(error.message).toBe('failed reading file "PATH": MESSAGE')
  })
})
