import type { Handler } from './Handler'
import type { Method } from './Method'
import type { Schema } from './Schema'

interface Endpoint {
  path: string,
  method: Method,
  name?: string,
  description?: string,
  schema: Schema,
  handler: Handler,
}

export {
  type Endpoint,
}
