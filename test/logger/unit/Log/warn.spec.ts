import { randomUUID } from 'crypto'
import { hostname } from 'os'
import { pid } from 'process'
import fs from 'fs-extra'
import { Destination } from 'logger/Destination'
import { Level } from 'logger/Level'
import { Log } from 'logger/Log'
import { wait } from 'utils/wait'

describe('logging at warn level', () => {
  test('has expected side effect', async () => {
    const log = new Log({
      level: Level.SILENT,
      destination: Destination.STDOUT,
    })

    const warnMock = jest.spyOn(log.getLogger(), 'warn')

    log.warn('foo')

    expect(warnMock).toHaveBeenCalledTimes(1)
  })
})

describe('logging a message at warn level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.WARN,
      destination: Destination.FILE,
      file: path,
    })

    log.warn('foo')

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(40)
    expect(record.msg).toBe('foo')
  })
})

describe('logging an object at warn level', () => {
  test('has expected side effect', async () => {
    const path = `/tmp/log-${randomUUID()}`

    const log = new Log({
      level: Level.WARN,
      destination: Destination.FILE,
      file: path,
    })

    log.warn({
      foo: 'foo',
      bar: 'bar',
    })

    await wait(100)

    const record = fs.readJsonSync(path)

    expect(record.hostname).toBe(hostname())
    expect(record.pid).toBe(pid)
    expect(record.time).toBeLessThan(Date.now())
    expect(record.level).toBe(40)
    expect(record.foo).toBe('foo')
    expect(record.bar).toBe('bar')
  })
})
