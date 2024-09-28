import { ColumnMaxLengthError } from './errors/ColumnMaxLengthError'

const validateColumnMaxLength = (maxLength: number): void => {
  if (maxLength < 1 || maxLength > 65535) {
    throw new ColumnMaxLengthError(maxLength)
  }
}

export {
  validateColumnMaxLength,
}
