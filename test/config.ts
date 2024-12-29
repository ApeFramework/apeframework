import type { Config } from 'jest'

const module = process.env.MODULE
const adapter = process.env.ADAPTER

if (!module) {
  throw new Error('missing environment variable MODULE')
}

if (!adapter) {
  throw new Error('missing environment variable ADAPTER')
}

const config: Config = {
  rootDir: '../..',
  verbose: true,
  clearMocks: true,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  testMatch: [
    ...adapter === 'unit'
      ? [`<rootDir>/test/${module}/unit/**/*.spec.ts`]
      : [`<rootDir>/test/${module}/adapters/${adapter}/**/*.spec.ts`],
    ...['unit', 'noop'].includes(adapter)
      ? []
      : [`<rootDir>/test/${module}/interop/**/*.spec.ts`],
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'lcov',
    'text',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: adapter === 'unit'
    ? [`<rootDir>/src/${module}/**/*.ts`]
    : [`<rootDir>/src/${module}/adapters/${adapter}/**/*.ts`],
  coveragePathIgnorePatterns: adapter === 'unit'
    ? [`<rootDir>/src/${module}/adapters`]
    : [],
}

export {
  config as default,
}
