import { MailerEventGeolocationError } from 'mailer/errors/MailerEventGeolocationError'

describe('creating an event geolocation error', () => {
  test('returns expected value', async () => {
    const error = new MailerEventGeolocationError(0, 0)

    expect(error.message).toBe('invalid event geolocation "0, 0"')
  })
})
