import { MailerListUrlError } from 'mailer/errors/MailerListUrlError'

describe('creating a list url error', () => {
  test('returns expected value', async () => {
    const error = new MailerListUrlError('PROPERTY', 'URL')

    expect(error.message).toBe('invalid list PROPERTY url "URL"')
  })
})
