import type { FastifyReply, FastifyRequest } from 'fastify'

type Handler = (
  request: FastifyRequest,
  response: FastifyReply,
) => Promise<void>

export {
  type Handler,
}
