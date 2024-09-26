import { BaseError } from '../../error/BaseError'

class CipherDecryptError extends BaseError {
  public constructor(message: string) {
    super(`failed decrypting string: ${message}`)
  }
}

export {
  CipherDecryptError,
}
