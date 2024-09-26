import { BaseError } from '../../error/BaseError'

class DbColumnLengthError extends BaseError {
  public constructor(length: number) {
    super(`invalid column length "${length}"`)
  }
}

export {
  DbColumnLengthError,
}
