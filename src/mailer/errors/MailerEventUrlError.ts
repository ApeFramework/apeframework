import { BaseError } from '../../error/BaseError'

class MailerEventUrlError extends BaseError {
  public constructor(url: string) {
    super(`invalid event url "${url}"`)
  }
}

export {
  MailerEventUrlError,
}
