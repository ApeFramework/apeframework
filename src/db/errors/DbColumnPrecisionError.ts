import { BaseError } from '../../error/BaseError'

class DbColumnPrecisionError extends BaseError {
  public constructor(precision: number) {
    super(`invalid column precision "${precision}"`)
  }
}

export {
  DbColumnPrecisionError,
}
