import { BaseError } from '../../error/BaseError'

class ColumnMaxLengthError extends BaseError {
  public constructor(maxLength: number) {
    super(`invalid column max length "${maxLength}"`)
  }
}

export {
  ColumnMaxLengthError,
}
