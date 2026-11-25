import app from './app.js';
import { env } from './config/env.js';

const server = app.listen(env.port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }

  const address = server.address();
  const actualPort = typeof address === 'object' && address !== null ? address.port : env.port;
  console.log(`Server running on port ${actualPort} (${env.nodeEnv})`);
});

