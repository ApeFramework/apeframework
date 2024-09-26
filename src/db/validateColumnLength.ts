import { DbColumnLengthError } from './errors/DbColumnLengthError'

const validateColumnLength = (length: number): void => {
  if (length < 1 || length > 255) {
    throw new DbColumnLengthError(length)
  }
}

export {
  validateColumnLength,
}
