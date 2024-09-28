import { isValidEmail } from 'utils/isValidEmail'
import { AddressEmailError } from './errors/AddressEmailError'

const validateAddressEmail = (email: string): void => {
  if (!isValidEmail(email)) {
    throw new AddressEmailError(email)
  }
}

export {
  validateAddressEmail,
}
