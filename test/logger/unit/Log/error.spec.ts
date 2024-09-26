import { randomUUID } from 'crypto'
import { hostname } from 'os'
import { pid } from 'process'
import fs from 'fs-extra'
import { Destination } from 'logger/Destination'
import { Level } from 'logger/Level'
import { Log } from 'logger/Log'
import { wait } from 'utils/wait'

describe('logging at error level', () => {
  test('has expected side effect', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
    })

    const errorMock = jest.spyOn(log.getLogger(), 'error')

    log.error('foo')

    expect(errorMock).toHaveBeenCalledTimes(1)
  })
})

describe('logging a message at error level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.ERROR,
      destination: Destination.FILE,
      file: path,
    })

    log.error('foo')

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(50)
    expect(record.msg).toBe('foo')
  })
})

describe('logging an object at error level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.ERROR,
      destination: Destination.FILE,
      file: path,
    })

    log.error({
      foo: 'foo',
      bar: 'bar',
    })

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(50)
    expect(record.foo).toBe('foo')
    expect(record.bar).toBe('bar')
  })
})
