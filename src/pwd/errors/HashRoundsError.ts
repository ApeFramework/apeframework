import { BaseError } from '../../error/BaseError.js'

class HashRoundsError extends BaseError {
  public constructor(hashRounds: number) {
    super(`invalid hash rounds "${hashRounds}"`)
  }
}

export {
  HashRoundsError,
}
