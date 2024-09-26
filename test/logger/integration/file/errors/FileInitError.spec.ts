import { FileInitError } from 'logger/adapters/file/errors/FileInitError'

describe('creating a file initialization error', () => {
  test('returns expected value', async () => {
    const error = new FileInitError('PATH', 'MESSAGE')

    expect(error.message).toBe('failed initializing file "PATH": MESSAGE')
  })
})
