import { ParserInputError } from 'parser/errors/ParserInputError'

describe('creating an input error', () => {
  test('returns expected value', async () => {
    const error = new ParserInputError('TYPE')

    expect(error.message).toBe('failed parsing TYPE: invalid input')
  })
})
