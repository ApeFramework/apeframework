import { getConstraintName } from './getConstraintName'
import { getReferentialActionSql } from './getReferentialActionSql'
import type { ReferentialAction } from './ReferentialAction'
import type { Knex } from 'knex'

class ColumnBuilder {
  private readonly table: string

  private readonly column: string

  private readonly knexColumnBuilder: Knex.ColumnBuilder

  public constructor(
    table: string,
    column: string,
    knexColumnBuilder: Knex.ColumnBuilder,
  ) {
    this.table = table
    this.column = column
    this.knexColumnBuilder = knexColumnBuilder
  }

  public primary(): this {
    this.knexColumnBuilder.primary({
      constraintName: 'PRIMARY',
    })
    return this
  }

  public foreign(
    referencedTable: string,
    referencedColumn: string,
    onUpdate: ReferentialAction,
    onDelete: ReferentialAction,
  ): this {
    this.knexColumnBuilder
      .references(referencedColumn)
      .inTable(referencedTable)
      .onUpdate(getReferentialActionSql(onUpdate))
      .onDelete(getReferentialActionSql(onDelete))
      .withKeyName(getConstraintName('FOREIGN', this.table, [this.column]))
    return this
  }

  public index(): this {
    this.knexColumnBuilder
      .index(getConstraintName('INDEX', this.table, [this.column]))
    return this
  }

  public unique(): this {
    this.knexColumnBuilder.unique({
      indexName: getConstraintName('UNIQUE', this.table, [this.column]),
    })
    return this
  }
}

export {
  ColumnBuilder,
}
