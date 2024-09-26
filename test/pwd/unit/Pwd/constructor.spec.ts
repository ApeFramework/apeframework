import { Pwd } from 'pwd/Pwd'

describe('creating a pwd', () => {
  test('succeeds', async () => {
    const pwd = new Pwd({
      hashRounds: 3,
    })

    expect(pwd).toBeInstanceOf(Pwd)
  })
})
