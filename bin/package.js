#! /usr/bin/env node

/*
 * Usage: ./bin/package.js <version>
 *
 *   Package build:
 *     ./bin/package.js 0.0.0-dev.0
 */

'use strict'

const fs = require('fs-extra')

const [version] = process.argv.slice(2)

if (!version) {
  throw new Error('missing argument <version>')
}

const devPkg = fs.readJsonSync('package.json')

const tsConfig = fs.readJsonSync('tsconfig.build.json')

const pkg = {
  name: 'apeframework',
  version,
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: 'Node.js app framework',
  keywords: ['ape', 'framework', 'nodejs'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeFramework/apeframework.git',
  },
  publishConfig: {
    access: 'public',
  },
  main: 'index.js',
  types: 'index.d.ts',
  engines: devPkg.engines,
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
}

fs.ensureDirSync('dist')

fs.writeJsonSync('dist/package.json', pkg, { spaces: 2 })

fs.copySync('LICENSE', 'dist/LICENSE')

fs.copySync('README.md', 'dist/README.md')

tsConfig.include.forEach((path) => {
  fs.copySync(path, `dist/${path.substring('src/'.length)}`)
})
