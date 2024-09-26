import type { NullConstraint } from './NullConstraint'
import type { Knex } from 'knex'

const setNullConstraint = (
  knexColumnBuilder: Knex.ColumnBuilder,
  nullConstraint: NullConstraint,
): void => {
  if (nullConstraint === 'notNull') {
    knexColumnBuilder.notNullable()
  }
}

export {
  setNullConstraint,
}
