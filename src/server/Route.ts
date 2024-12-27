import type { Handler } from './Handler.js'
import type { Method } from './Method.js'
import type { Schema } from './Schema.js'

interface Route {
  path: string,
  method: Method,
  name?: string,
  description?: string,
  schema: Schema,
  handler: Handler,
}

export {
  type Route,
}
