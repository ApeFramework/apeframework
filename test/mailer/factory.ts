import { NoopMailer } from 'mailer/adapters/noop/NoopMailer'
import { SmtpMailer } from 'mailer/adapters/smtp/SmtpMailer'
import type { Mailer } from 'mailer/Mailer'

const createMailer = (): Mailer => {
  switch (process.env.ADAPTER) {
    case 'noop':
      return new NoopMailer()
    case 'smtp':
      return new SmtpMailer({
        host: 'maildev',
        port: 1025,
      })
    default:
      throw new Error('invalid adapter')
  }
}

export {
  createMailer,
}
