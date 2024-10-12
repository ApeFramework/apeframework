import bcrypt from 'bcryptjs'
import { validateHashRounds } from './validateHashRounds'

class Pwd {
  private readonly hashRounds: number

  public constructor(params: {
    hashRounds: number,
  }) {
    validateHashRounds(params.hashRounds)

    this.hashRounds = params.hashRounds
  }

  public async hashPassword(
    password: string,
  ): Promise<string> {
    return bcrypt.hashSync(password, this.hashRounds)
  }

  public async verifyPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compareSync(password, hash)
  }
}

export {
  Pwd,
}
