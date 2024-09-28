import { BaseError } from '../../error/BaseError'

class ColumnLengthError extends BaseError {
  public constructor(length: number) {
    super(`invalid column length "${length}"`)
  }
}

export {
  ColumnLengthError,
}
