import { BaseError } from '../../error/BaseError'

class MailerEventGeolocationError extends BaseError {
  public constructor(latitude: number, longitude: number) {
    super(`invalid event geolocation "${latitude}, ${longitude}"`)
  }
}

export {
  MailerEventGeolocationError,
}
