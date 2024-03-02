import { Static, Type } from '@sinclair/typebox';

const blog = Type.Object({
  _id: Type.String(),
  title: Type.String(),
  content: Type.String(),
  shortId: Type.String(),
  published: Type.Boolean(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export const createBlogSchema = {
  tags: ['blog'],
  description: 'Creates a blog resource',
  body: Type.Object({
    title: Type.String({
      default: 'A default title',
    }),
    content: Type.String({
      default: 'A default content',
    }),
  }),
  response: {
    201: blog,
  },
};

export type CreateBlogBody = Static<typeof createBlogSchema.body>;
