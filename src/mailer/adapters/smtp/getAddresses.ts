import { getAddress } from './getAddress.js'
import type { Address } from '../../Address.js'
import type { Address as NodemailerAddress } from 'nodemailer/lib/mailer'

const getAddresses = (addresses?: Address[]): NodemailerAddress[] => {
  return addresses
    ? addresses
      .map(getAddress)
      .filter((address) => {
        return address !== undefined
      })
    : []
}

export {
  getAddresses,
}
