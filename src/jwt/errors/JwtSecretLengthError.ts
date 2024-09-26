import { BaseError } from '../../error/BaseError'

class JwtSecretLengthError extends BaseError {
  public constructor() {
    super('invalid secret length')
  }
}

export {
  JwtSecretLengthError,
}
