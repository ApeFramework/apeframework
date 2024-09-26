import { isValidEmail } from 'utils/isValidEmail'
import { MailerAddressEmailError } from './errors/MailerAddressEmailError'

const validateAddressEmail = (email: string): void => {
  if (!isValidEmail(email)) {
    throw new MailerAddressEmailError(email)
  }
}

export {
  validateAddressEmail,
}
