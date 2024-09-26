interface Logger {
  trace: (message: string, data?: unknown) => void,
  debug: (message: string, data?: unknown) => void,
  info: (message: string, data?: unknown) => void,
  warn: (message: string, data?: unknown) => void,
  error: (message: string, data?: unknown) => void,
  fatal: (message: string, data?: unknown) => void,
  close: () => Promise<void>,
}

export {
  type Logger,
}
