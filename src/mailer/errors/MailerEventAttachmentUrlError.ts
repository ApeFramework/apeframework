import { BaseError } from '../../error/BaseError'

class MailerEventAttachmentUrlError extends BaseError {
  public constructor(url: string) {
    super(`invalid event attachment url "${url}"`)
  }
}

export {
  MailerEventAttachmentUrlError,
}
