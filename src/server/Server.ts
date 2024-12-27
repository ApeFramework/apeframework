import compress from '@fastify/compress'
import cors from '@fastify/cors'
import responseValidation from '@fastify/response-validation'
import swagger from '@fastify/swagger'
import fastify from 'fastify'
import { OpenApiFormat } from './OpenApiFormat.js'
import { getAjv } from './getAjv.js'
import type { ErrorHandler } from './ErrorHandler.js'
import type { Format } from './Format.js'
import type { Handler } from './Handler.js'
import type { Route } from './Route.js'
import type { FastifyInstance } from 'fastify'
import type { OpenAPIV3 } from 'openapi-types'

class Server {
  private readonly server: FastifyInstance

  private readonly host: string

  private readonly port: number | undefined

  public constructor(params: {
    host: string,
    port?: number,
    routes: Route[],
    formats?: Format[],
    openapi?: {
      name?: string,
      version?: string,
    },
    responseValidation?: boolean,
    compression?: {
      enabled?: boolean,
      threshold?: number,
    },
    cors?: {
      enabled?: boolean,
      origins?: string[],
    },
    onRequest?: Handler,
    onResponse?: Handler,
    onNotFound?: Handler,
    onError?: ErrorHandler,
  }) {
    this.host = params.host
    this.port = params.port

    this.server = fastify()

    this.server.setValidatorCompiler(({ schema }) => {
      return getAjv(params.formats).compile(schema)
    })

    this.server.register(swagger, {
      openapi: {
        openapi: '3.1.0',
        info: {
          title: params.openapi?.name ?? '',
          version: params.openapi?.version ?? '',
        },
      },
    })

    if (params.responseValidation) {
      this.server.register(responseValidation)
    }

    if (params.compression?.enabled) {
      this.server.register(compress, {
        global: true,
        threshold: params.compression.threshold ?? 1024,
      })
    }

    if (params.cors?.enabled) {
      this.server.register(cors, {
        origin: params.cors.origins,
      })
    }

    this.server.register((server, options, done) => {
      params.routes.forEach((route) => {
        server.route({
          url: route.path,
          method: route.method,
          schema: {
            summary: route.name ?? route.path,
            description: route.description,
            ...route.schema.params ? { params: route.schema.params } : {},
            ...route.schema.query ? { query: route.schema.query } : {},
            ...route.schema.headers ? { headers: route.schema.headers } : {},
            ...route.schema.body ? { body: route.schema.body } : {},
            ...route.schema.response ? { response: route.schema.response } : {},
          },
          handler: route.handler,
        })
      })
      done()
    })

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
  }

  public async start(): Promise<string> {
    return this.server.listen({
      host: this.host,
      port: this.port,
    })
  }

  public openapi(format: OpenApiFormat): OpenAPIV3.Document {
    return this.server.swagger({
      yaml: format === OpenApiFormat.YAML,
    }) as OpenAPIV3.Document
  }
}

export {
  Server,
}
