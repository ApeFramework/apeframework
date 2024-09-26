import { BaseError } from '../../error/BaseError'

class MailerListUrlError extends BaseError {
  public constructor(property: string, url: string) {
    super(`invalid list ${property} url "${url}"`)
  }
}

export {
  MailerListUrlError,
}
