/*
 * Usage: yarn package <version>
 *
 *   Package build:
 *     yarn package 0.0.0-dev.0
 */
import { join } from 'path'
import fs from 'fs-extra'

const [version] = process.argv.slice(2)

if (!version) {
  throw new Error('missing argument <version>')
}

type Exports = Record<string, { import: { types: string, default: string } }>

const getExports = (dir: string): Exports => {
  let exp: Exports = {}
  const files = fs.readdirSync(dir, { withFileTypes: true })
  files.forEach((file) => {
    const path = join(dir, file.name)
    if (file.isDirectory()) {
      exp = { ...exp, ...getExports(path) }
    } else {
      const module = path.replace(/^src\/|\.ts$/gu, '')
      exp[`./${module}`] = {
        import: {
          types: `./dist/${module}.d.ts`,
          default: `./dist/${module}.js`,
        },
      }
    }
  })
  return exp
}

const devPkg = fs.readJsonSync('package.json')

const pkg: any = {
  name: 'apeframework',
  version,
  publishConfig: {
    access: 'public',
  },
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: 'Node.js app framework',
  keywords: ['ape', 'framework', 'nodejs'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeFramework/apeframework.git',
  },
  type: devPkg.type,
  engines: devPkg.engines,
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
  exports: getExports('src'),
}

fs.writeJsonSync('package/package.json', pkg, { spaces: 2 })
fs.copySync('LICENSE', 'package/LICENSE')
fs.copySync('README.md', 'package/README.md')
