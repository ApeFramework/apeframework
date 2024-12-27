import base from '@apeframework/eslint/base'
import jest from '@apeframework/eslint/jest'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base,
  jest,
  typescript,
  {
    ignores: [
      'package',
    ],
  },
]

export {
  config as default,
}
