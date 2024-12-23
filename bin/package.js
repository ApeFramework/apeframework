/*
 * Usage: node bin/package <version>
 *
 *   Package build:
 *     node bin/package 0.0.0-dev.0
 */
import fs from 'fs-extra'

const [version] = process.argv.slice(2)

if (!version) {
  throw new Error('missing argument <version>')
}

const devPkg = fs.readJsonSync('package.json')

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
  type: devPkg.type,
  engines: devPkg.engines,
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
}

fs.ensureDirSync('dist')

fs.writeJsonSync('dist/package.json', pkg, { spaces: 2 })

fs.copySync('LICENSE', 'dist/LICENSE')

fs.copySync('README.md', 'dist/README.md')
