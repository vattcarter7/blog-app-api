import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

import { version } from '../../package.json';
import { FastifyInstance } from 'fastify';
import { config } from './config';

const swaggerOptions = {
  swagger: {
    info: {
      title: 'Blog app',
      description: 'Simple blog app endpoints',
      version,
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'blog' }],
  },
};

const swaggerUiOptions = {
  routePrefix: '/docs',
  exposeRoute: true,
  staticCSP: true,
};

export const registerSwagger = async (app: FastifyInstance) => {
  if (config.NODE_ENV !== 'production') {
    app.register(swagger, swaggerOptions);
    app.register(swaggerUi, swaggerUiOptions);
  }
};
