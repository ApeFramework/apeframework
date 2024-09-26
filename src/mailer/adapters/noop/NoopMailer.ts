import { randomUUID } from 'crypto'
import type { Mail } from '../../Mail'
import type { Mailer } from '../../Mailer'

class NoopMailer implements Mailer {
  public async send(mail: Mail): Promise<string> {
    return `${randomUUID()}@${mail.from.email.split('@')[1]}`
  }

  public async close(): Promise<void> { }
}

export {
  NoopMailer,
}
