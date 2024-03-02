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
      logger.error(`Got signal ${signal}.`);
      logger.info('Attempting gracefully shutdown HTTP server...');
      await server.close();
      await disconnectFromDb();
      logger.info(`Server gracefully shutdown.`);
      process.exit(0);
    });
  }
};
