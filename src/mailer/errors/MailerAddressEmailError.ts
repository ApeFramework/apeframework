import { BaseError } from '../../error/BaseError'

class MailerAddressEmailError extends BaseError {
  public constructor(email: string) {
    super(`invalid address email "${email}"`)
  }
}

export {
  MailerAddressEmailError,
}
