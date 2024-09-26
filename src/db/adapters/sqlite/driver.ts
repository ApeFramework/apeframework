import type { Driver } from '../../Driver'

const driver: Driver = {
  dataType: {
    boolean: 'INTEGER',
    tinyInt: 'INTEGER',
    smallInt: 'INTEGER',
    smallIntPrimaryAutoIncrement: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    int: 'INTEGER',
    intPrimaryAutoIncrement: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    bigInt: 'INTEGER',
    bigIntPrimaryAutoIncrement: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    float: 'REAL',
    double: 'REAL',
    numeric: () => {
      return 'NUMERIC'
    },
    char: () => {
      return 'TEXT'
    },
    varChar: () => {
      return 'TEXT'
    },
    tinyText: 'TEXT',
    text: 'TEXT',
    longText: 'TEXT',
    binary: () => {
      return 'BLOB'
    },
    varBinary: () => {
      return 'BLOB'
    },
    tinyBlob: 'BLOB',
    blob: 'BLOB',
    longBlob: 'BLOB',
    timestamp: 'TEXT',
    dateTime: 'TEXT',
    date: 'TEXT',
    time: 'TEXT',
  },
}

export {
  driver,
}
