import { PropertyNameError } from 'config/errors/PropertyNameError'

describe('creating a property name error', () => {
  test('returns expected value', async () => {
    const error = new PropertyNameError('NAME')

    expect(error.message).toBe('invalid property name "NAME"')
  })
})
