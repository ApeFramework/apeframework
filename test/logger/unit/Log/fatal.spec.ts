import { randomUUID } from 'crypto'
import { hostname } from 'os'
import { pid } from 'process'
import fs from 'fs-extra'
import { Destination } from 'logger/Destination'
import { Level } from 'logger/Level'
import { Log } from 'logger/Log'
import { wait } from 'utils/wait'

describe('logging at fatal level', () => {
  test('has expected side effect', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
    })

    const fatalMock = jest.spyOn(log.getLogger(), 'fatal')

    log.fatal('foo')

    expect(fatalMock).toHaveBeenCalledTimes(1)
  })
})

describe('logging a message at fatal level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.FATAL,
      destination: Destination.FILE,
      file: path,
    })

    log.fatal('foo')

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(60)
    expect(record.msg).toBe('foo')
  })
})

describe('logging an object at fatal level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.FATAL,
      destination: Destination.FILE,
      file: path,
    })

    log.fatal({
      foo: 'foo',
      bar: 'bar',
    })

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(60)
    expect(record.foo).toBe('foo')
    expect(record.bar).toBe('bar')
  })
})
