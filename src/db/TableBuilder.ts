import { ColumnBuilder } from './ColumnBuilder'
import { getConstraintName } from './getConstraintName'
import { getReferentialActionSql } from './getReferentialActionSql'
import { setNullConstraint } from './setNullConstraint'
import { validateColumnLength } from './validateColumnLength'
import { validateColumnMaxLength } from './validateColumnMaxLength'
import { validateColumnPrecision } from './validateColumnPrecision'
import type { Driver } from './Driver'
import type { NullConstraint } from './NullConstraint'
import type { ReferentialAction } from './ReferentialAction'
import type { Knex } from 'knex'

class TableBuilder {
  private readonly table: string

  private readonly knexTableBuilder: Knex.TableBuilder

  private readonly driver: Driver

  public constructor(
    table: string,
    knexTableBuilder: Knex.TableBuilder,
    driver: Driver,
  ) {
    this.table = table
    this.knexTableBuilder = knexTableBuilder
    this.driver = driver
  }

  public boolean(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.boolean)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public tinyInt(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.tinyInt)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public smallInt(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.smallInt)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public smallIntPrimaryAutoIncrement(
    column: string,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.smallIntPrimaryAutoIncrement)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public int(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.int)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public intPrimaryAutoIncrement(
    column: string,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.intPrimaryAutoIncrement)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public bigInt(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.bigInt)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public bigIntPrimaryAutoIncrement(
    column: string,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.bigIntPrimaryAutoIncrement)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public float(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.float)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public double(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.double)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public numeric(
    column: string,
    precision: number,
    scale: number,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    validateColumnPrecision(precision, scale)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.numeric(precision, scale))
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public char(
    column: string,
    length: number,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    validateColumnLength(length)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.char(length))
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public varChar(
    column: string,
    maxLength: number,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    validateColumnMaxLength(maxLength)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.varChar(maxLength))
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public tinyText(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.tinyText)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public text(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.text)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public longText(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.longText)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public binary(
    column: string,
    length: number,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    validateColumnLength(length)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.binary(length))
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public varBinary(
    column: string,
    maxLength: number,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    validateColumnMaxLength(maxLength)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.varBinary(maxLength))
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public tinyBlob(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.tinyBlob)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public blob(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.blob)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public longBlob(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.longBlob)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public timestamp(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.timestamp)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public dateTime(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.dateTime)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public date(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.date)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public time(
    column: string,
    nullConstraint: NullConstraint,
  ): ColumnBuilder {
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(column, this.driver.dataType.time)
    setNullConstraint(knexColumnBuilder, nullConstraint)
    return new ColumnBuilder(this.table, column, knexColumnBuilder)
  }

  public dropColumn(column: string): this {
    this.knexTableBuilder.dropColumn(column)
    return this
  }

  public renameColumn(column: string, newName: string): this {
    this.knexTableBuilder.renameColumn(column, newName)
    return this
  }

  public setNull(column: string): this {
    this.knexTableBuilder.setNullable(column)
    return this
  }

  public setNotNull(column: string): this {
    this.knexTableBuilder.dropNullable(column)
    return this
  }

  public setPrimary(columns: string[]): this {
    this.knexTableBuilder.primary(columns, {
      constraintName: 'PRIMARY',
    })
    return this
  }

  public dropPrimary(): this {
    this.knexTableBuilder.dropPrimary('PRIMARY')
    return this
  }

  public addForeign(
    columns: string[],
    referencedTable: string,
    referencedColumns: string[],
    onUpdate: ReferentialAction,
    onDelete: ReferentialAction,
  ): this {
    this.knexTableBuilder
      .foreign(columns, getConstraintName('FOREIGN', this.table, columns))
      .references(referencedColumns)
      .inTable(referencedTable)
      .onUpdate(getReferentialActionSql(onUpdate))
      .onDelete(getReferentialActionSql(onDelete))
    return this
  }

  public dropForeign(columns: string[]): this {
    this.knexTableBuilder
      .dropForeign(columns, getConstraintName('FOREIGN', this.table, columns))
    return this
  }

  public addIndex(columns: string[]): this {
    this.knexTableBuilder
      .index(columns, getConstraintName('INDEX', this.table, columns))
    return this
  }

  public dropIndex(columns: string[]): this {
    this.knexTableBuilder
      .dropIndex(columns, getConstraintName('INDEX', this.table, columns))
    return this
  }

  public addUnique(columns: string[]): this {
    this.knexTableBuilder.unique(columns, {
      indexName: getConstraintName('UNIQUE', this.table, columns),
    })
    return this
  }

  public dropUnique(columns: string[]): this {
    this.knexTableBuilder
      .dropUnique(columns, getConstraintName('UNIQUE', this.table, columns))
    return this
  }
}

export {
  TableBuilder,
}
