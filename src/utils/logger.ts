import { format, createLogger, transports } from 'winston';

const { combine, timestamp } = format;

export const logger = createLogger({
  level: 'debug',
  format: combine(timestamp(), format.json()),
  transports: [new transports.Console()],
});
