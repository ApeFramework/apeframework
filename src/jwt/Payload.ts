interface Payload {
  [key: string]: unknown,
  subject: string,
  issuedAt: number,
  id?: string,
}

export {
  type Payload,
}
