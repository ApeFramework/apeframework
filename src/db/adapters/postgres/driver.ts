import type { Driver } from '../../Driver'

const driver: Driver = {
  dataType: {
    boolean: 'BOOLEAN',
    tinyInt: 'SMALLINT',
    smallInt: 'SMALLINT',
    smallIntPrimaryAutoIncrement: 'SMALLSERIAL PRIMARY KEY',
    int: 'INTEGER',
    intPrimaryAutoIncrement: 'SERIAL PRIMARY KEY',
    bigInt: 'BIGINT',
    bigIntPrimaryAutoIncrement: 'BIGSERIAL PRIMARY KEY',
    float: 'REAL',
    double: 'DOUBLE PRECISION',
    numeric: (precision: number, scale: number) => {
      return `NUMERIC(${precision}, ${scale})`
    },
    char: (length: number) => {
      return `CHAR(${length})`
    },
    varChar: (maxLength: number) => {
      return `VARCHAR(${maxLength})`
    },
    tinyText: 'TEXT',
    text: 'TEXT',
    longText: 'TEXT',
    binary: () => {
      return 'BYTEA'
    },
    varBinary: () => {
      return 'BYTEA'
    },
    tinyBlob: 'BYTEA',
    blob: 'BYTEA',
    longBlob: 'BYTEA',
    timestamp: 'TIMESTAMP(3)',
    dateTime: 'TIMESTAMP(3)',
    date: 'DATE',
    time: 'TIME(3)',
  },
}

export {
  driver,
}
