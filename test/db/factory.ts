import { createMysqlDatabase } from 'db/adapters/mysql/createMysqlDatabase'
import type { Database } from 'db/Database'

const createDatabase = (): Database => {
  switch (process.env.ADAPTER) {
    case 'mysql':
      return createMysqlDatabase({
        host: 'mysql',
        port: 3306,
        user: 'user',
        password: 'password',
        database: 'database',
      })
    default:
      throw new Error('invalid adapter')
  }
}

export {
  createDatabase,
}
