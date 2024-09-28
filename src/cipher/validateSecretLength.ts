import { Algorithm } from './Algorithm'
import { SecretLengthError } from './errors/SecretLengthError'

const secretLength = {
  [Algorithm.AES128]: 16,
  [Algorithm.AES192]: 24,
  [Algorithm.AES256]: 32,
}

const validateSecretLength = (algorithm: Algorithm, secret: string): void => {
  if (Buffer.from(secret).length !== secretLength[algorithm]) {
    throw new SecretLengthError()
  }
}

export {
  validateSecretLength,
}
