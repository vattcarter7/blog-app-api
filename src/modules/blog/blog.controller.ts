import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../../utils/logger';
import { CreateBlogBody } from './blog.schema';
import { createBlog } from './blog.service';

export async function createBlogHandler(
  request: FastifyRequest<{
    Body: CreateBlogBody;
  }>,
  reply: FastifyReply
) {
  try {
    const blog = await createBlog(request.body);
    return reply.code(201).send(blog);
  } catch (e) {
    logger.error('createBlogHandler: error creating blog', e);
    return reply.code(400).send({ message: 'Error creating blog' });
  }
}
