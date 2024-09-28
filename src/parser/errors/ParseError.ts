import { BaseError } from '../../error/BaseError'

class ParseError extends BaseError {
  public constructor(type: string) {
    super(`failed parsing ${type}`)
  }
}

export {
  ParseError,
}
