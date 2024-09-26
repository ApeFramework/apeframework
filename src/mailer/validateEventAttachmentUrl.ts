import { isValidUrl } from 'utils/isValidUrl'
import { MailerEventAttachmentUrlError } from './errors/MailerEventAttachmentUrlError'

const validateEventAttachmentUrl = (url: string): void => {
  if (!isValidUrl(url)) {
    throw new MailerEventAttachmentUrlError(url)
  }
}

export {
  validateEventAttachmentUrl,
}
