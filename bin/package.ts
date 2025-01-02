/*
 * Usage: yarn package <version>
 *
 *   Package source:
 *     yarn package 0.0.0-dev.0
 */
import path from 'path'
import fs from 'fs-extra'

const [version] = process.argv.slice(2)

if (!version) {
  throw new Error('missing argument <version>')
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
  exports: {},
  engines: devPkg.engines,
  dependencies: devPkg.dependencies,
  peerDependencies: devPkg.peerDependencies,
}

const srcFileRegex = /^src\/(?<path>.*)\.ts$/u

const generateExports = (dir: string): void => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  files.forEach((file) => {
    const fullPath = path.join(dir, file.name)
    if (file.isDirectory()) {
      generateExports(fullPath)
    } else {
      const filePath = srcFileRegex.exec(fullPath)?.groups?.path
      const typeExport = `./dist/${filePath}.d.ts`
      const defaultExport = `./dist/${filePath}.js`
      if (!fs.existsSync(path.join('package', typeExport))) {
        throw new Error(`missing export file ${typeExport}`)
      }
      if (!fs.existsSync(path.join('package', defaultExport))) {
        throw new Error(`missing export file ${defaultExport}`)
      }
      pkg.exports[`./${filePath}`] = {
        import: {
          types: typeExport,
          default: defaultExport,
        },
      }
    }
  })
}

generateExports('src')

fs.writeJsonSync('package/package.json', pkg, { spaces: 2 })
fs.copySync('LICENSE', 'package/LICENSE')
fs.copySync('README.md', 'package/README.md')
