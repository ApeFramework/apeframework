let value: any

const typeCast = (field: any, next: any): any => {
  switch (field.type) {
    case 'BIT':
      value = field.buffer()
      return value === null ? null : Boolean(value[0])
    case 'NEWDECIMAL':
      value = field.string()
      return value === null ? null : parseFloat(value)
    default:
      return next()
  }
}

export {
  typeCast,
}
