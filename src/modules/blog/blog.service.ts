import { nanoid } from 'nanoid';
import { Blog, BlogModel } from './blog.model';
import { CreateBlogBody } from './blog.schema';

export async function createBlog(input: CreateBlogBody): Promise<Blog> {
  const shortId = `blog_${nanoid()}`;

  return BlogModel.create({
    shortId,
    ...input,
  });
}
