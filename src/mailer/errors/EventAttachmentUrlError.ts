import { BaseError } from '../../error/BaseError'

class EventAttachmentUrlError extends BaseError {
  public constructor(url: string) {
    super(`invalid event attachment url "${url}"`)
  }
}

export {
  EventAttachmentUrlError,
}
