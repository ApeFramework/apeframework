import cors from '@fastify/cors'
import responseValidation from '@fastify/response-validation'
import swagger from '@fastify/swagger'
import fastify from 'fastify'
import type { Endpoint } from './Endpoint'
import type { ErrorHandler } from './ErrorHandler'
import type { Handler } from './Handler'
import type { FastifyInstance } from 'fastify'

class Api {
  private readonly host: string

  private readonly port: number | undefined

  private readonly server: FastifyInstance

  public constructor(params: {
    host: string,
    port?: number,
    endpoints: Endpoint[],
    onRequest?: Handler,
    onResponse?: Handler,
    onNotFound?: Handler,
    onError?: ErrorHandler,
    openapi?: {
      title?: string,
      version?: string,
    },
    cors?: {
      enable?: boolean,
      origin?: string[],
    },
    responseValidation?: boolean,
  }) {
    this.host = params.host
    this.port = params.port

    this.server = fastify()

    if (params.onRequest) {
      this.server.addHook('onRequest', params.onRequest)
    }

    if (params.onResponse) {
      this.server.addHook('onResponse', params.onResponse)
    }

    if (params.onNotFound) {
      this.server.setNotFoundHandler(params.onNotFound)
    }

    if (params.onError) {
      this.server.setErrorHandler(params.onError)
    }

    this.server.register(swagger, {
      openapi: {
        openapi: '3.1.0',
        info: {
          title: params.openapi?.title ?? '',
          version: params.openapi?.version ?? '',
        },
      },
    })

    if (params.cors?.enable) {
      this.server.register(cors, {
        origin: params.cors.origin,
      })
    }

    if (params.responseValidation) {
      this.server.register(responseValidation)
    }

    params.endpoints.forEach((e) => {
      this.server.route({
        url: e.path,
        method: e.method,
        schema: {
          summary: e.name ?? e.path,
          description: e.description,
          ...e.schema.params ? { params: e.schema.params } : {},
          ...e.schema.query ? { query: e.schema.query } : {},
          ...e.schema.headers ? { headers: e.schema.headers } : {},
          ...e.schema.body ? { body: e.schema.body } : {},
          ...e.schema.response ? { response: e.schema.response } : {},
        },
        handler: e.handler,
      })
    })
  }

  public async start(): Promise<string> {
    return this.server.listen({
      host: this.host,
      port: this.port,
    })
  }
}

export {
  Api,
}
