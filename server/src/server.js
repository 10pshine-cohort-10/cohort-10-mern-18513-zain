import app from './app.js';
import { env } from './config/env.js';
import logger from './config/logger.js';

const server = app.listen(env.port, (err) => {
  if (err) {
    logger.error({ err }, 'Failed to start server');
    process.exit(1);
  }

  const address = server.address();
  const actualPort = typeof address === 'object' && address !== null ? address.port : env.port;
  logger.info({ port: actualPort, nodeEnv: env.nodeEnv }, 'Server started');
});

