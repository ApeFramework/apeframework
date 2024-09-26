import { BaseError } from '../../error/BaseError'

class DbColumnScaleError extends BaseError {
  public constructor(scale: number) {
    super(`invalid column scale "${scale}"`)
  }
}

export {
  DbColumnScaleError,
}
