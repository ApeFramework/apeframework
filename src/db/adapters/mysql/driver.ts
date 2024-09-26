import type { Driver } from '../../Driver'

const driver: Driver = {
  dataType: {
    boolean: 'BIT',
    tinyInt: 'TINYINT',
    smallInt: 'SMALLINT',
    smallIntPrimaryAutoIncrement: 'SMALLINT PRIMARY KEY AUTO_INCREMENT',
    int: 'INTEGER',
    intPrimaryAutoIncrement: 'INTEGER PRIMARY KEY AUTO_INCREMENT',
    bigInt: 'BIGINT',
    bigIntPrimaryAutoIncrement: 'BIGINT PRIMARY KEY AUTO_INCREMENT',
    float: 'FLOAT',
    double: 'DOUBLE',
    numeric: (precision: number, scale: number) => {
      return `NUMERIC(${precision}, ${scale})`
    },
    char: (length: number) => {
      return `CHAR(${length})`
    },
    varChar: (maxLength: number) => {
      return `VARCHAR(${maxLength})`
    },
    tinyText: 'TINYTEXT',
    text: 'TEXT',
    longText: 'LONGTEXT',
    binary: (length: number) => {
      return `BINARY(${length})`
    },
    varBinary: (maxLength: number) => {
      return `VARBINARY(${maxLength})`
    },
    tinyBlob: 'TINYBLOB',
    blob: 'BLOB',
    longBlob: 'LONGBLOB',
    timestamp: 'TIMESTAMP(3)',
    dateTime: 'DATETIME(3)',
    date: 'DATE',
    time: 'TIME(3)',
  },
}

export {
  driver,
}
