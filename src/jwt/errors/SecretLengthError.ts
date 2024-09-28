import { BaseError } from '../../error/BaseError'

class SecretLengthError extends BaseError {
  public constructor() {
    super('invalid secret length')
  }
}

export {
  SecretLengthError,
}
