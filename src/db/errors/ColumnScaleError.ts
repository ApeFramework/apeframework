import { BaseError } from '../../error/BaseError'

class ColumnScaleError extends BaseError {
  public constructor(scale: number) {
    super(`invalid column scale "${scale}"`)
  }
}

export {
  ColumnScaleError,
}
