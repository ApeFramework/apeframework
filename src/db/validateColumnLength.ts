import { ColumnLengthError } from './errors/ColumnLengthError'

const validateColumnLength = (length: number): void => {
  if (length < 1 || length > 255) {
    throw new ColumnLengthError(length)
  }
}

export {
  validateColumnLength,
}
