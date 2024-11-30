import cors from '@fastify/cors'
import responseValidation from '@fastify/response-validation'
import swagger from '@fastify/swagger'
import fastify from 'fastify'
import { OpenApiFormat } from './OpenApiFormat'
import { getAjv } from './getAjv'
import type { Endpoint } from './Endpoint'
import type { ErrorHandler } from './ErrorHandler'
import type { Format } from './Format'
import type { Handler } from './Handler'
import type { FastifyInstance } from 'fastify'
import type { OpenAPIV3 } from 'openapi-types'

class Api {
  private readonly host: string

  private readonly port: number | undefined

  private readonly server: FastifyInstance

  public constructor(params: {
    host: string,
    port?: number,
    endpoints: Endpoint[],
    formats?: Format[],
    openapi?: {
      name?: string,
      version?: string,
    },
    cors?: {
      enable?: boolean,
      origins?: string[],
    },
    responseValidation?: boolean,
    onRequest?: Handler,
    onResponse?: Handler,
    onNotFound?: Handler,
    onError?: ErrorHandler,
  }) {
    this.host = params.host
    this.port = params.port

    this.server = fastify()

    const ajv = getAjv(params.formats)

    this.server.setValidatorCompiler(({ schema }) => {
      return ajv.compile(schema)
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

    this.server.register(swagger, {
      openapi: {
        openapi: '3.1.0',
        info: {
          title: params.openapi?.name ?? '',
          version: params.openapi?.version ?? '',
        },
      },
    })

    if (params.cors?.enable) {
      this.server.register(cors, {
        origin: params.cors.origins,
      })
    }

    if (params.responseValidation) {
      this.server.register(responseValidation)
    }

    this.server.register((server, options, done) => {
      params.endpoints.forEach((e) => {
        server.route({
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
      done()
    })
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
  Api,
}
