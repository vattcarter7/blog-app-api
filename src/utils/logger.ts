import { format, createLogger, transports } from 'winston';

const { combine, timestamp, colorize, simple } = format;

export const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), colorize(), simple()),
  transports: [new transports.Console()],
});
