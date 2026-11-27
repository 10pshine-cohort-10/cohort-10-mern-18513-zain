import 'dotenv/config';

const rawPort = process.env.PORT;
const port = rawPort !== undefined && rawPort !== '' ? Number(rawPort) : 4000;

if (!Number.isInteger(port) || port < 0 || port > 65535) {
  throw new Error(`Invalid PORT: ${rawPort}`);
}

export const env = {
  port,
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
};

