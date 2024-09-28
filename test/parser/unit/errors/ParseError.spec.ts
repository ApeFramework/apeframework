import { ParseError } from 'parser/errors/ParseError'

describe('creating an input error', () => {
  test('returns expected value', async () => {
    const error = new ParseError('TYPE')

    expect(error.message).toBe('failed parsing TYPE')
  })
})
