import type { Readable } from 'stream'

interface Attachment {
  fileName: string,
  contentType?: string,
  content: Buffer | Readable | string,
}

export {
  type Attachment,
}
