import knex from 'knex'
import { getTls } from '../../../tls/getTls'
import { Database } from '../../Database'
import { driver } from './driver'
import { typeCast } from './typeCast'
import type { Tls } from '../../../tls/Tls'

const createMysqlDatabase = (params: {
  host: string,
  port: number,
  tls?: Tls,
  user: string,
  password?: string,
  database: string,
  maxConnections?: number,
}): Database => {
  return new Database(knex({
    client: 'mysql2',
    connection: {
      host: params.host,
      port: params.port,
      ssl: getTls(params.tls),
      user: params.user,
      password: params.password,
      database: params.database,
      dateStrings: true,
      typeCast,
    },
    pool: {
      min: 0,
      max: params.maxConnections,
    },
    useNullAsDefault: true,
  }), driver)
}

export {
  createMysqlDatabase,
}
