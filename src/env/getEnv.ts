import { readFile } from './readFile'
import type { Env } from './Env'

const getEnv = (params?: {
  file?: {
    path: string,
    required?: boolean,
  },
}): Env => {
  let file: Env = {}

  if (params?.file) {
    file = readFile(params.file.path, params.file.required)
  }

  return {
    ...file,
    ...process.env as Env,
  }
}

export {
  getEnv,
}
