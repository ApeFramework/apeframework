import crypto from 'crypto'

const getConstraintName = (
  constraint: string,
  table: string,
  columns: string[],
): string => {
  const hash = crypto
    .createHash('md5')
    .update([table, ...columns].join('_'))
    .digest('hex')

  return `${constraint}_${hash}`
}

export {
  getConstraintName,
}
