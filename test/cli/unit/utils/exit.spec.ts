import { exit } from 'cli/utils/exit.js'

describe('exiting', () => {
  test('has expected side effect', async () => {
    jest
      .spyOn(process, 'exit')
      .mockImplementation((code) => { throw new Error(`code: ${code}`) })

    expect(() => {
      exit()
    }).toThrow('code: undefined')

    expect(() => {
      exit(3)
    }).toThrow('code: 3')
  })
})
