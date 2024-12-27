import { HashRoundsError } from './errors/HashRoundsError.js'

const validateHashRounds = (hashRounds: number): void => {
  if (hashRounds < 1) {
    throw new HashRoundsError(hashRounds)
  }
}

export {
  validateHashRounds,
}
