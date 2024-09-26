import { MailerEventAttachmentUrlError } from 'mailer/errors/MailerEventAttachmentUrlError'

describe('creating an event attachment url error', () => {
  test('returns expected value', async () => {
    const error = new MailerEventAttachmentUrlError('URL')

    expect(error.message).toBe('invalid event attachment url "URL"')
  })
})
