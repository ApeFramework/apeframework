import { BaseError } from '../../error/BaseError'

class EventGeolocationError extends BaseError {
  public constructor(latitude: number, longitude: number) {
    super(`invalid event geolocation "${latitude}, ${longitude}"`)
  }
}

export {
  EventGeolocationError,
}
