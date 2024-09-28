import { print } from 'cli/utils/print'

describe('printing', () => {
  test('has expected side effect', async () => {
    const writeMock = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => { return true })

    print('foo')

    expect(writeMock).toHaveBeenCalledWith('foo')
  })
})
