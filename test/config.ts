import type { Config } from 'jest'

const module = process.env.MODULE
const adapter = process.env.ADAPTER

const config: Config = {
  rootDir: '../..',
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  testMatch: [
    ...adapter
      ? [`<rootDir>/test/${module}/integration/${adapter}/**/*.spec.ts`]
      : [`<rootDir>/test/${module}/unit/**/*.spec.ts`],
    ...adapter && adapter !== 'noop'
      ? [`<rootDir>/test/${module}/interop/**/*.spec.ts`]
      : [],
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
  collectCoverageFrom: adapter
    ? [`<rootDir>/src/${module}/adapters/${adapter}/**/*.ts`]
    : [`<rootDir>/src/${module}/**/*.ts`],
  coveragePathIgnorePatterns: adapter
    ? []
    : [`<rootDir>/src/${module}/adapters`],
}

export {
  config as default,
}
