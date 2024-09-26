import fs from 'fs-extra'
import { TlsFileReadError } from './errors/TlsFileReadError'

const readFile = (path: string): string => {
  try {
    if (fs.existsSync(path)) {
      return fs.readFileSync(path).toString()
    }
  } catch (error) {
    throw new TlsFileReadError(path, (error as Error).message)
  }

  throw new TlsFileReadError(path, 'missing file')
}

export {
  readFile,
}
