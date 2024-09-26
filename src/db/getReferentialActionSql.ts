import type { ReferentialAction } from './ReferentialAction'

const sql: Record<ReferentialAction, string> = {
  cascade: 'CASCADE',
  restrict: 'RESTRICT',
  setNull: 'SET NULL',
}

const getReferentialActionSql = (
  referentialAction: ReferentialAction,
): string => {
  return sql[referentialAction]
}

export {
  getReferentialActionSql,
}
