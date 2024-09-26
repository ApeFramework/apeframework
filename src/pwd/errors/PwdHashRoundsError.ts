import { BaseError } from '../../error/BaseError'

class PwdHashRoundsError extends BaseError {
  public constructor(hashRounds: number) {
    super(`invalid hash rounds "${hashRounds}"`)
  }
}

export {
  PwdHashRoundsError,
}
