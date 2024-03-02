import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { createBlogHandler } from './blog.controller';
import { createBlogSchema } from './blog.schema';

export function blogRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post(
    '/',
    {
      schema: createBlogSchema,
    },
    createBlogHandler
  );

  done();
}
