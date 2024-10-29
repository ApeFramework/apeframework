'use strict'

const ape = require('@apeframework/eslint')
const apeJest = require('@apeframework/eslint/jest')
const apeTypescript = require('@apeframework/eslint/typescript')

module.exports = [
  {
    ...ape,
    rules: {
      ...ape.rules,
    },
  },
  {
    files: ['**/*.ts'],
    ...apeTypescript,
    rules: {
      ...apeTypescript.rules,
    },
  },
  {
    files: ['**/*.spec.ts'],
    ...apeJest,
    rules: {
      ...apeJest.rules,
    },
  },
]
