import { BaseError } from '../../error/BaseError'

class DecryptError extends BaseError {
  public constructor(message: string) {
    super(`failed decrypting string: ${message}`)
  }
}

export {
  DecryptError,
}
