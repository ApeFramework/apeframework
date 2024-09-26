import type { EventLocation } from './EventLocation'
import type { EventMethod } from './EventMethod'

interface Event {
  fileName?: string,
  method: EventMethod,
  id?: string,
  start: Date,
  end: Date,
  allDay?: boolean,
  name: string,
  description?: string,
  url?: string,
  location?: EventLocation,
  attachments?: string[],
}

export {
  type Event,
}
