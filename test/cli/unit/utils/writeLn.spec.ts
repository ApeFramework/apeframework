import { EOL } from 'os'
import { writeLn } from 'cli/utils/writeLn'

describe('writing to the standard output followed by a new line', () => {
  test('has expected side effect', async () => {
    const writeMock = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => { return true })

    writeLn('foo')

    expect(writeMock).toHaveBeenCalledWith(`foo${EOL}`)
  })
})
