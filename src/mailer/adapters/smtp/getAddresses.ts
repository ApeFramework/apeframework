import { getAddress } from './getAddress'
import type { Address } from '../../Address'
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
