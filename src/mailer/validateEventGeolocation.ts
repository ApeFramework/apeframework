import { isValidGeolocation } from 'utils/isValidGeolocation'
import { MailerEventGeolocationError } from './errors/MailerEventGeolocationError'

const validateEventGeolocation = (
  latitude: number,
  longitude: number,
): void => {
  if (!isValidGeolocation(latitude, longitude)) {
    throw new MailerEventGeolocationError(latitude, longitude)
  }
}

export {
  validateEventGeolocation,
}
