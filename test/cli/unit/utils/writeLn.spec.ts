import { EOL } from 'os'
import { printLn } from 'cli/utils/printLn.js'

describe('printing with a trailing new line', () => {
  test('has expected side effect', async () => {
    const writeMock = jest
      .spyOn(process.stdout, 'write')
      .mockImplementation(() => { return true })

    printLn('foo')

    expect(writeMock).toHaveBeenCalledWith(`foo${EOL}`)
  })
})
