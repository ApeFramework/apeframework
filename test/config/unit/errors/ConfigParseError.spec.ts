import { ConfigParseError } from 'config/errors/ConfigParseError'

describe('creating a parse error', () => {
  test('returns expected value', async () => {
    const error = new ConfigParseError('PROPERTY', 'SOURCE', 'MESSAGE')

    expect(error.message)
      .toBe('failed parsing property "PROPERTY" from SOURCE: MESSAGE')
  })
})
