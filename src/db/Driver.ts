interface Driver {
  dataType: {
    boolean: string,
    tinyInt: string,
    smallInt: string,
    smallIntPrimaryAutoIncrement: string,
    int: string,
    intPrimaryAutoIncrement: string,
    bigInt: string,
    bigIntPrimaryAutoIncrement: string,
    float: string,
    double: string,
    numeric: (precision: number, scale: number) => string,
    char: (length: number) => string,
    varChar: (maxLength: number) => string,
    tinyText: string,
    text: string,
    longText: string,
    binary: (length: number) => string,
    varBinary: (maxLength: number) => string,
    tinyBlob: string,
    blob: string,
    longBlob: string,
    timestamp: string,
    dateTime: string,
    date: string,
    time: string,
  },
}

export {
  type Driver,
}
