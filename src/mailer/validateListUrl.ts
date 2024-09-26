import { isValidUrl } from 'utils/isValidUrl'
import { MailerListUrlError } from './errors/MailerListUrlError'

const validateListUrl = (property: string, url: string): void => {
  if (!isValidUrl(url)) {
    throw new MailerListUrlError(property, url)
  }
}

export {
  validateListUrl,
}
