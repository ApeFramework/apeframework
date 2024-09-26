import { BaseError } from '../../error/BaseError'

class ConfigPropertyNameError extends BaseError {
  public constructor(name: string) {
    super(`invalid property name "${name}"`)
  }
}

export {
  ConfigPropertyNameError,
}
