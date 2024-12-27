import { isValidUrl } from 'utils/isValidUrl'
import { ListUrlError } from './errors/ListUrlError.js'

const validateListUrl = (property: string, url: string): void => {
  if (!isValidUrl(url)) {
    throw new ListUrlError(property, url)
  }
}

export {
  validateListUrl,
}
