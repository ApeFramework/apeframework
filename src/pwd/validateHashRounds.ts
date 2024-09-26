import { PwdHashRoundsError } from './errors/PwdHashRoundsError'

const validateHashRounds = (hashRounds: number): void => {
  if (hashRounds < 1) {
    throw new PwdHashRoundsError(hashRounds)
  }
}

export {
  validateHashRounds,
}
