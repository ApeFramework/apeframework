import { randomUUID } from 'crypto'
import { hostname } from 'os'
import { pid } from 'process'
import fs from 'fs-extra'
import { Destination } from 'logger/Destination'
import { Level } from 'logger/Level'
import { Log } from 'logger/Log'
import { wait } from 'utils/wait'

describe('logging at trace level', () => {
  test('has expected side effect', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
    })

    const traceMock = jest.spyOn(log.getLogger(), 'trace')

    log.trace('foo')

    expect(traceMock).toHaveBeenCalledTimes(1)
  })
})

describe('logging a message at trace level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.TRACE,
      destination: Destination.FILE,
      file: path,
    })

    log.trace('foo')

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(10)
    expect(record.msg).toBe('foo')
  })
})

describe('logging an object at trace level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.TRACE,
      destination: Destination.FILE,
      file: path,
    })

    log.trace({
      foo: 'foo',
      bar: 'bar',
    })

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(10)
    expect(record.foo).toBe('foo')
    expect(record.bar).toBe('bar')
  })
})
