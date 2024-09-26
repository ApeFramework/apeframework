import dotenv from 'dotenv'
import fs from 'fs-extra'
import { EnvFileReadError } from './errors/EnvFileReadError'
import type { Env } from './Env'

const readFile = (path: string, required = false): Env => {
  try {
    if (fs.existsSync(path)) {
      return dotenv.parse(fs.readFileSync(path))
    }
  } catch (error) {
    throw new EnvFileReadError(path, (error as Error).message)
  }

  if (required) {
    throw new EnvFileReadError(path, 'missing file')
  }

  return {}
}

export {
  readFile,
}
