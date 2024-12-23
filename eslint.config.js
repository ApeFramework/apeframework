import base from '@apeframework/eslint/base.js'
import jest from '@apeframework/eslint/jest.js'
import typescript from '@apeframework/eslint/typescript.js'

const config = [
  base,
  jest,
  typescript,
  {
    ignores: [
      'dist',
    ],
  },
]

export {
  config as default,
}
