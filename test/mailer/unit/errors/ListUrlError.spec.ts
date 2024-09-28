import { ListUrlError } from 'mailer/errors/ListUrlError'

describe('creating a list url error', () => {
  test('returns expected value', async () => {
    const error = new ListUrlError('PROPERTY', 'URL')

    expect(error.message).toBe('invalid list PROPERTY url "URL"')
  })
})
