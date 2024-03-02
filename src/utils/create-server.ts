import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import { blogRoute } from '../modules/blog/blog.route';
import { swaggerOptions, swaggerUiOptions } from './swagger';

export const createServer = async () => {
  const app = fastify();

  // Register swagger
  app.register(fastifySwagger, swaggerOptions);
  app.register(fastifySwaggerUi, swaggerUiOptions);

  // Register routes
  app.register(blogRoute, { prefix: '/api/blogs' });

  return app;
};
