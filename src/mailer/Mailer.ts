import type { Mail } from './Mail'

interface Mailer {
  send: (mail: Mail) => Promise<string>,
  close: () => Promise<void>,
}

export {
  type Mailer,
}
