import type { Address } from '../../Address.js'
import type { Address as NodemailerAddress } from 'nodemailer/lib/mailer'

const getAddress = (address?: Address): NodemailerAddress | undefined => {
  return address
    ? {
      address: address.email,
      name: address.name ?? '',
    }
    : undefined
}

export {
  getAddress,
}
