import { DbColumnPrecisionError } from './errors/DbColumnPrecisionError'
import { DbColumnScaleError } from './errors/DbColumnScaleError'

const validateColumnPrecision = (precision: number, scale: number): void => {
  if (precision < 1 || precision > 15) {
    throw new DbColumnPrecisionError(precision)
  }
  if (scale < 0 || scale >= precision) {
    throw new DbColumnScaleError(scale)
  }
}

export {
  validateColumnPrecision,
}
