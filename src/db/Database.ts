import { TableBuilder } from './TableBuilder'
import type { Driver } from './Driver'
import type { Knex } from 'knex'

class Database {
  private readonly knex: Knex

  private readonly driver: Driver

  public constructor(knex: Knex, driver: Driver) {
    this.knex = knex
    this.driver = driver
  }

  public async createTable(
    table: string,
    build: (tableBuilder: TableBuilder) => void,
  ): Promise<void> {
    return this.knex.schema.createTable(table, (knexTableBuilder) => {
      build(new TableBuilder(table, knexTableBuilder, this.driver))
    })
  }

  public async createTableLike(
    table: string,
    like: string,
    build: (tableBuilder: TableBuilder) => void,
  ): Promise<void> {
    return this.knex.schema.createTableLike(table, like, (knexTableBuilder) => {
      build(new TableBuilder(table, knexTableBuilder, this.driver))
    })
  }

  public async alterTable(
    table: string,
    build: (tableBuilder: TableBuilder) => void,
  ): Promise<void> {
    return this.knex.schema.alterTable(table, (knexTableBuilder) => {
      build(new TableBuilder(table, knexTableBuilder, this.driver))
    })
  }

  public async dropTable(table: string): Promise<void> {
    return this.knex.schema.dropTable(table)
  }

  public async dropTableIfExists(table: string): Promise<void> {
    return this.knex.schema.dropTableIfExists(table)
  }

  public async renameTable(table: string, newName: string): Promise<void> {
    await this.knex.schema.renameTable(table, newName)
  }

  public async hasTable(table: string): Promise<boolean> {
    return this.knex.schema.hasTable(table)
  }

  public async hasColumn(table: string, column: string): Promise<boolean> {
    return this.knex.schema.hasColumn(table, column)
  }

  public async table<Type extends Knex>(table: string): Promise<Knex<Type>> {
    return this.knex(table)
  }

  public async from(table: Knex.Table): Promise<Knex.QueryBuilder> {
    return this.knex.from(table)
  }
}

export {
  Database,
}
