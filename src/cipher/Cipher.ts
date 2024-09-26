import crypto from 'crypto'
import { CipherDecryptError } from './errors/CipherDecryptError'
import { validateSecretLength } from './validateSecretLength'
import type { Algorithm } from './Algorithm'

class Cipher {
  private readonly algorithm: Algorithm

  private readonly secret: Buffer

  public constructor(params: {
    algorithm: Algorithm,
    secret: string,
  }) {
    validateSecretLength(params.algorithm, params.secret)

    this.algorithm = params.algorithm
    this.secret = Buffer.from(params.secret, 'utf8')
  }

  public encrypt(string: string): string {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(this.algorithm, this.secret, iv)

    return iv.toString('hex')
      + cipher.update(string, 'utf8', 'hex')
      + cipher.final('hex')
  }

  public decrypt(string: string): string {
    const buffer = Buffer.from(string, 'hex')
    const iv = buffer.subarray(0, 16)
    const decipher = crypto.createDecipheriv(this.algorithm, this.secret, iv)

    try {
      return decipher.update(buffer.subarray(16), undefined, 'utf8')
        + decipher.final('utf8')
    } catch (error) {
      throw new CipherDecryptError((error as Error).message)
    }
  }
}

export {
  Cipher,
}
