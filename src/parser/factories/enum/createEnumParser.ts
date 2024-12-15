import { ParseError } from '../../errors/ParseError'
import type { Parser } from '../../Parser'

const createEnumParser = <Type extends Record<string, string | number>>(
  params: {
    type: string,
    enum: Type,
  },
): Parser<Type[keyof Type]> => {
  return (input) => {
    if (!Object.values(params.enum).includes(input)) {
      throw new ParseError(params.type)
    }

    return input
  }
}

export {
  createEnumParser,
}
