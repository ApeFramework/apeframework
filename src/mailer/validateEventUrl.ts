import { isValidUrl } from 'utils/isValidUrl'
import { EventUrlError } from './errors/EventUrlError'

const validateEventUrl = (url: string): void => {
  if (!isValidUrl(url)) {
    throw new EventUrlError(url)
  }
}

export {
  validateEventUrl,
}
