import base from '@apeframework/eslint/base'
import typescript from '@apeframework/eslint/typescript'

const config = [
  base,
  typescript,
  {
    ignores: [
      'build',
      'test',
    ],
  },
]

export {
  config as default,
}
