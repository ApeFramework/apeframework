import type { Address } from './Address'
import type { Attachment } from './Attachment'
import type { Event } from './Event'
import type { List } from './List'

interface Mail {
  from: Address,
  sender?: Address,
  replyTo?: Address,
  to: Address[],
  cc?: Address[],
  bcc?: Address[],
  subject: string,
  text: string,
  html?: string,
  attachments?: Attachment[],
  event?: Event,
  list?: List,
}

export {
  type Mail,
}
