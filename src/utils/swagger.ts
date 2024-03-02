import { version } from '../../package.json';

export const swaggerOptions = {
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

export const swaggerUiOptions = {
  routePrefix: '/docs',
  exposeRoute: true,
  staticCSP: true,
};
