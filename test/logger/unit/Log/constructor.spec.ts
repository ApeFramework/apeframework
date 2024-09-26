import { randomUUID } from 'crypto'
import { Destination } from 'logger/Destination'
import { Level } from 'logger/Level'
import { Log } from 'logger/Log'

describe('creating a log using the standard output', () => {
  test('succeeds', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
    })

    expect(log).toBeInstanceOf(Log)
  })
})

describe('creating a log using the standard output with pretty format', () => {
  test('succeeds', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
      pretty: true,
    })

    expect(log).toBeInstanceOf(Log)
  })
})

describe('creating a log using a file', () => {
  test('succeeds', async () => {
    const file = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.SILENT,
      destination: Destination.FILE,
      file,
    })

    expect(log).toBeInstanceOf(Log)
  })
})
