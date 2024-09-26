const getTimestamp = (): number => {
  return Math.trunc(Date.now() / 1000)
}

export {
  getTimestamp,
}
