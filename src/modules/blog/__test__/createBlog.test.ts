import { nanoid } from 'nanoid';
import { describe, it, vi, expect } from 'vitest';
import { createServer } from '../../../utils/create-server';
import * as BlogService from '../blog.service';

describe('POST "/api/blogs" route', () => {
  it('should call the createBlog service', async () => {
    const blog = {
      _id: 'mock id',
      title: 'mock title',
      content: 'mock content',
      shortId: nanoid(),
      published: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const createBlogSpy = vi.spyOn(BlogService, 'createBlog');

    expect(createBlogSpy.getMockName()).toEqual('createBlog');

    createBlogSpy.mockResolvedValue(blog);

    const server = await createServer();

    await server.ready();

    const payload = {
      title: 'A test blog title',
      content: 'A test blog content',
    };

    const response = await server.inject({
      method: 'POST',
      url: '/api/blogs',
      payload,
    });

    expect(response.json()).toEqual(blog);
    expect(createBlogSpy).toHaveBeenCalledWith(payload);
  });
});
