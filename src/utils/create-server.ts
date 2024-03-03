import fastify from 'fastify';

import { blogRoute } from '../modules/blog/blog.route';
import { registerSwagger } from './swagger';

export const createServer = async () => {
  const app = fastify();

  // Register swagger
  await registerSwagger(app);

  // Register routes
  app.register(blogRoute, { prefix: '/api/blogs' });

  return app;
};
