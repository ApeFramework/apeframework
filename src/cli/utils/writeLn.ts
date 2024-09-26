import { EOL } from 'os'

const writeLn = (s: string): void => {
  process.stdout.write(`${s}${EOL}`)
}

export {
  writeLn,
}
