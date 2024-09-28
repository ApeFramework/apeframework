import { isValidGeolocation } from 'utils/isValidGeolocation'
import { EventGeolocationError } from './errors/EventGeolocationError'

const validateEventGeolocation = (
  latitude: number,
  longitude: number,
): void => {
  if (!isValidGeolocation(latitude, longitude)) {
    throw new EventGeolocationError(latitude, longitude)
  }
}

export {
  validateEventGeolocation,
}
