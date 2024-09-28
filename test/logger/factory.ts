import { randomUUID } from 'crypto'
import { Level } from 'logger/Level'
import { FileLogger } from 'logger/adapters/file/FileLogger'
import { NoopLogger } from 'logger/adapters/noop/NoopLogger'
import { StdioLogger } from 'logger/adapters/stdio/StdioLogger'
import type { Logger } from 'logger/Logger'

const createLogger = (): Logger => {
  switch (process.env.ADAPTER) {
    case 'file':
      return new FileLogger({
        path: `/tmp/log-${randomUUID()}`,
      })
    case 'noop':
      return new NoopLogger()
    case 'stdio':
      return new StdioLogger({
        level: Level.OFF,
      })
    default:
      throw new Error('invalid adapter')
  }
}

export {
  createLogger,
}
