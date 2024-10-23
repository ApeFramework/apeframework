import { ParseError } from './errors/ParseError'
import type { Parser } from './Parser'

const parseString: Parser<string> = (input) => {
  if ([undefined, null].includes(input)) {
    return ''
  } else if (['object', 'function', 'symbol'].includes(typeof input)) {
    throw new ParseError('string')
  }

  return String(input)
}

export {
  parseString,
}
