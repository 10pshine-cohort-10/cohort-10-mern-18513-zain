import app from './app.js';
import { env } from './config/env.js';

app.listen(env.port, (): void => {
  console.log(`Server running on port ${env.port} (${env.nodeEnv})`);
});
