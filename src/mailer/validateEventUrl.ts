import { isValidUrl } from 'utils/isValidUrl'
import { MailerEventUrlError } from './errors/MailerEventUrlError'

const validateEventUrl = (url: string): void => {
  if (!isValidUrl(url)) {
    throw new MailerEventUrlError(url)
  }
}

export {
  validateEventUrl,
}
