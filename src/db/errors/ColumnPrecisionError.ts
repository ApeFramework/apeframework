import { BaseError } from '../../error/BaseError'

class ColumnPrecisionError extends BaseError {
  public constructor(precision: number) {
    super(`invalid column precision "${precision}"`)
  }
}

export {
  ColumnPrecisionError,
}
