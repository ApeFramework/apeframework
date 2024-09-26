import { randomUUID } from 'crypto'
import { hostname } from 'os'
import { pid } from 'process'
import fs from 'fs-extra'
import { Destination } from 'logger/Destination'
import { Level } from 'logger/Level'
import { Log } from 'logger/Log'
import { wait } from 'utils/wait'

describe('logging at debug level', () => {
  test('has expected side effect', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
    })

    const debugMock = jest.spyOn(log.getLogger(), 'debug')

    log.debug('foo')

    expect(debugMock).toHaveBeenCalledTimes(1)
  })
})

describe('logging a message at debug level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.DEBUG,
      destination: Destination.FILE,
      file: path,
    })

    log.debug('foo')

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(20)
    expect(record.msg).toBe('foo')
  })
})

describe('logging an object at debug level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.DEBUG,
      destination: Destination.FILE,
      file: path,
    })

    log.debug({
      foo: 'foo',
      bar: 'bar',
    })

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(20)
    expect(record.foo).toBe('foo')
    expect(record.bar).toBe('bar')
  })
})
