import nodemailer from 'nodemailer'
import { getTls } from '../../../tls/getTls'
import { getIcalendar } from '../../getIcalendar'
import { getAddress } from './getAddress'
import { getAddresses } from './getAddresses'
import { getAttachments } from './getAttachments'
import type { Tls } from '../../../tls/Tls'
import type { Mail } from '../../Mail'
import type { Mailer } from '../../Mailer'
import type { Transporter } from 'nodemailer'

class SmtpMailer implements Mailer {
  private readonly transporter: Transporter

  public constructor(params: {
    host: string,
    port: number,
    secure?: boolean,
    tls?: Tls,
    user?: string,
    password?: string,
    maxConnections?: number,
  }) {
    this.transporter = nodemailer.createTransport({
      host: params.host,
      port: params.port,
      secure: params.secure ?? false,
      tls: getTls(params.tls),
      auth: params.user || params.password
        ? {
          user: params.user,
          pass: params.password,
        }
        : undefined,
      pool: true,
      maxConnections: params.maxConnections ?? 5,
    })
  }

  public async send(mail: Mail): Promise<string> {
    const result = await this.transporter.sendMail({
      from: getAddress(mail.from),
      sender: getAddress(mail.sender),
      replyTo: getAddress(mail.replyTo),
      to: getAddresses(mail.to),
      cc: getAddresses(mail.cc),
      bcc: getAddresses(mail.bcc),
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: getAttachments(mail.attachments),
      icalEvent: mail.event
        ? {
          filename: mail.event.fileName ?? 'event.ics',
          method: mail.event.method,
          content: getIcalendar(mail.event),
        }
        : undefined,
      list: { ...mail.list },
    })

    return result.messageId.slice(1, -1)
  }

  public async close(): Promise<void> {
    this.transporter.close()
  }
}

export {
  SmtpMailer,
}
