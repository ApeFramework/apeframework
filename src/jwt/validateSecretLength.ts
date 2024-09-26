import { Algorithm } from './Algorithm'
import { JwtSecretLengthError } from './errors/JwtSecretLengthError'

const minSecretLength = {
  [Algorithm.HS256]: 32,
  [Algorithm.HS384]: 48,
  [Algorithm.HS512]: 64,
}

const validateSecretLength = (algorithm: Algorithm, secret: string): void => {
  if (Buffer.from(secret).length < minSecretLength[algorithm]) {
    throw new JwtSecretLengthError()
  }
}

export {
  validateSecretLength,
}
