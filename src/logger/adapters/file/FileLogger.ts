import pino from 'pino'
import { Level } from '../../Level'
import { initFile } from './initFile'
import type { Logger } from '../../Logger'
import type { Logger as PinoLogger } from 'pino'

class FileLogger implements Logger {
  private readonly logger: PinoLogger

  private readonly context: object | undefined

  public constructor(params: {
    path: string,
    level?: Level,
    context?: object,
  }) {
    initFile(params.path)

    const stream = pino.destination(params.path)

    this.logger = pino({
      enabled: params.level !== Level.OFF,
      level: params.level ?? Level.INFO,
      messageKey: 'message',
      formatters: {
        level(label, number) {
          return {
            level: label,
            severity: number,
          }
        },
        bindings: () => { return {} },
      },
    }, stream)

    this.context = params.context
  }

  public trace(message: string, data?: unknown): void {
    this.logger.trace(this.getData(message, data))
  }

  public debug(message: string, data?: unknown): void {
    this.logger.debug(this.getData(message, data))
  }

  public info(message: string, data?: unknown): void {
    this.logger.info(this.getData(message, data))
  }

  public warn(message: string, data?: unknown): void {
    this.logger.warn(this.getData(message, data))
  }

  public error(message: string, data?: unknown): void {
    this.logger.error(this.getData(message, data))
  }

  public fatal(message: string, data?: unknown): void {
    this.logger.fatal(this.getData(message, data))
  }

  public async close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.logger.flush((error) => {
        if (error) {
          reject(error)
        }
        resolve()
      })
    })
  }

  private getData(message: string, data?: unknown): object {
    return {
      ...this.context,
      message,
      data,
    }
  }
}

export {
  FileLogger,
}
