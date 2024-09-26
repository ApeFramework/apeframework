import { MailerAddressEmailError } from 'mailer/errors/MailerAddressEmailError'

describe('creating an address email error', () => {
  test('returns expected value', async () => {
    const error = new MailerAddressEmailError('EMAIL')

    expect(error.message).toBe('invalid address email "EMAIL"')
  })
})
