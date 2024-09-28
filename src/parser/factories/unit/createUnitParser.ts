import { ParseError } from '../../errors/ParseError'
import { parseNumber } from '../../parseNumber'
import { parseString } from '../../parseString'
import type { Unit } from './Unit'
import type { Parser } from '../../Parser'

const createUnitParser = (params: {
  type: string,
  units: Unit[],
}): Parser<number> => {
  return (input) => {
    let string: string

    try {
      string = parseString(input)
    } catch (error) {
      throw new ParseError(params.type)
    }

    const units: Unit[] = []

    params.units.forEach((u) => {
      units.push(u, { ...u, symbol: ` ${u.symbol}` })
    })

    units.sort((a, b) => {
      return b.symbol.length - a.symbol.length
    })

    const unit = units.find((u) => {
      return string.toUpperCase().endsWith(u.symbol.toUpperCase())
    })

    let number: number

    try {
      number = parseNumber(
        string.substring(0, string.length - (unit?.symbol.length ?? 0)),
      )
    } catch (error) {
      throw new ParseError(params.type)
    }

    return number * (unit?.value ?? 1)
  }
}

export {
  createUnitParser,
}
