import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

type ErrorHandler = (
  error: FastifyError,
  request: FastifyRequest,
  response: FastifyReply,
) => Promise<void>

export {
  type ErrorHandler,
}
