import { getPropertyEnvVar } from './getPropertyEnvVar'
import { parseProperty } from './parseProperty'
import { readFile } from './readFile'
import { validatePropertyName } from './validatePropertyName'
import type { Config } from './Config'
import type { Properties } from './Properties'
import type { Args } from '../cli/Args'
import type { Env } from '../env/Env'

const getConfig = <Type extends Config>(params: {
  properties: Properties<Type>,
  file?: {
    path: string,
    required?: boolean,
  },
  env?: Env,
  args?: Args,
}): Type => {
  const file = params.file
    ? readFile(params.file.path, params.file.required)
    : {}

  const env: Env = params.env ?? {}

  const args: Args = params.args ?? { positional: [], optional: {} }

  const config: Config = {}

  for (const name in params.properties) {
    validatePropertyName(name)

    config[name] = parseProperty(
      name,
      params.properties[name].parser,
      params.properties[name].default,
      file[name],
      env[getPropertyEnvVar(name)],
      args.optional[name],
    )
  }

  return config as Type
}

export {
  getConfig,
}
