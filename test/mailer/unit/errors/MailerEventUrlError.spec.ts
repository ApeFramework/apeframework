import { MailerEventUrlError } from 'mailer/errors/MailerEventUrlError'

describe('creating an event url error', () => {
  test('returns expected value', async () => {
    const error = new MailerEventUrlError('URL')

    expect(error.message).toBe('invalid event url "URL"')
  })
})
