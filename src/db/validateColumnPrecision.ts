import { ColumnPrecisionError } from './errors/ColumnPrecisionError'
import { ColumnScaleError } from './errors/ColumnScaleError'

const validateColumnPrecision = (precision: number, scale: number): void => {
  if (precision < 1 || precision > 15) {
    throw new ColumnPrecisionError(precision)
  }
  if (scale < 0 || scale >= precision) {
    throw new ColumnScaleError(scale)
  }
}

export {
  validateColumnPrecision,
}
