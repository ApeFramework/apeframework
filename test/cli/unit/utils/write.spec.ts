import { write } from 'cli/utils/write'

describe('writing to the standard output', () => {
  test('has expected side effect', async () => {
    const writeMock = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => { return true })

    write('foo')

    expect(writeMock).toHaveBeenCalledWith('foo')
  })
})
