import { BaseError } from '../../error/BaseError'

class DbColumnMaxLengthError extends BaseError {
  public constructor(maxLength: number) {
    super(`invalid column max length "${maxLength}"`)
  }
}

export {
  DbColumnMaxLengthError,
}
