import { PwdHashRoundsError } from 'pwd/errors/PwdHashRoundsError'

describe('creating a hash rounds error', () => {
  test('returns expected value', async () => {
    const error = new PwdHashRoundsError(0)

    expect(error.message).toBe('invalid hash rounds "0"')
  })
})
