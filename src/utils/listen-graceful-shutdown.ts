import { createServer } from './create-server';
import { disconnectFromDb } from './db';
import { logger } from './logger';

const signals = [
  'SIGINT',
  'SIGTERM',
  'SIGHUP',
  'uncaughtException',
  'unhandledRejection',
] as const;

export const listenGracefulShutdown = async (
  server: Awaited<ReturnType<typeof createServer>>
) => {
  for (const signal of signals) {
    process.on(signal, async () => {
      logger.info(
        `Got signal ${signal}. Attempting gracefully shutdown server...`
      );
      await server.close();
      await disconnectFromDb();
      logger.info(`Server gracefully shutdown successfully.`);
      process.exit(0);
    });
  }
};
