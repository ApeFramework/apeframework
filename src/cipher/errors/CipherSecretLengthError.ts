import { BaseError } from '../../error/BaseError'

class CipherSecretLengthError extends BaseError {
  public constructor() {
    super('invalid secret length')
  }
}

export {
  CipherSecretLengthError,
}
