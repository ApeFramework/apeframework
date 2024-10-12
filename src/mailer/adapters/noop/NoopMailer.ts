import { randomUUID } from 'crypto'
import { Mailer } from '../../Mailer'
import type { Mail } from '../../Mail'

class NoopMailer extends Mailer {
  public async sendMail(mail: Mail): Promise<string> {
    return `${randomUUID()}@${mail.from.email.split('@')[1]}`
  }

  public async close(): Promise<void> { }
}

export {
  NoopMailer,
}
