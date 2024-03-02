import { config } from './utils/config';
import { createServer } from './utils/create-server';
import { connectToDb } from './utils/db';
import { listenGracefulShutdown } from './utils/listen-graceful-shutdown';
import { logger } from './utils/logger';

const startServer = async () => {
  const server = await createServer();

  server.listen({
    port: config.PORT,
    host: config.HOST,
  });

  await connectToDb();

  logger.info(`App is running on ${config.HOST}:${config.PORT}`);

  await listenGracefulShutdown(server);
};

startServer();
