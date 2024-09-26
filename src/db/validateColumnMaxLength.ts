import { DbColumnMaxLengthError } from './errors/DbColumnMaxLengthError'

const validateColumnMaxLength = (maxLength: number): void => {
  if (maxLength < 1 || maxLength > 65535) {
    throw new DbColumnMaxLengthError(maxLength)
  }
}

export {
  validateColumnMaxLength,
}
