import { validateAddressEmail } from './validateAddressEmail'
import { validateEventAttachmentUrl } from './validateEventAttachmentUrl'
import { validateEventGeolocation } from './validateEventGeolocation'
import { validateEventUrl } from './validateEventUrl'
import { validateListUrl } from './validateListUrl'
import type { Mail } from './Mail'

abstract class Mailer {
  public async send(mail: Mail): Promise<string> {
    validateAddressEmail(mail.from.email)

    if (mail.sender) {
      validateAddressEmail(mail.sender.email)
    }

    if (mail.replyTo) {
      validateAddressEmail(mail.replyTo.email)
    }

    mail.to.forEach((address) => {
      validateAddressEmail(address.email)
    })

    if (mail.cc) {
      mail.cc.forEach((address) => {
        validateAddressEmail(address.email)
      })
    }

    if (mail.bcc) {
      mail.bcc.forEach((address) => {
        validateAddressEmail(address.email)
      })
    }

    if (mail.event?.url) {
      validateEventUrl(mail.event.url)
    }

    if (mail.event?.location?.geo) {
      validateEventGeolocation(
        mail.event.location.geo.latitude,
        mail.event.location.geo.longitude,
      )
    }

    if (mail.event?.attachments) {
      mail.event.attachments.forEach((attachment) => {
        validateEventAttachmentUrl(attachment)
      })
    }

    if (mail.list) {
      Object.entries(mail.list).forEach(([property, url]: [string, string]) => {
        validateListUrl(property, url)
      })
    }

    return this.sendMail(mail)
  }

  public abstract sendMail(mail: Mail): Promise<string>

  public abstract close(): Promise<void>
}

export {
  Mailer,
}
