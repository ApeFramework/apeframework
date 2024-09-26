import { ConfigPropertyNameError } from 'config/errors/ConfigPropertyNameError'

describe('creating a property name error', () => {
  test('returns expected value', async () => {
    const error = new ConfigPropertyNameError('NAME')

    expect(error.message).toBe('invalid property name "NAME"')
  })
})
