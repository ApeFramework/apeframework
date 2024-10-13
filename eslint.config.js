'use strict'

const ape = require('@apeframework/eslint')
const apeJest = require('@apeframework/eslint/jest')
const apeTypescript = require('@apeframework/eslint/typescript')

module.exports = [
  {
    ...ape,
    rules: {
      ...ape.rules,
      // overrides
    },
  },
  {
    files: ['**/*.ts'],
    ...apeTypescript,
    rules: {
      ...apeTypescript.rules,
      // overrides
    },
  },
  {
    files: ['**/*.spec.ts'],
    ...apeJest,
    rules: {
      ...apeJest.rules,
      // overrides
    },
  },
]
