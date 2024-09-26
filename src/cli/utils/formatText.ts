import { EOL } from 'os'

const formatText = (text: string[]): string => {
  return text.join(EOL)
}

export {
  formatText,
}
