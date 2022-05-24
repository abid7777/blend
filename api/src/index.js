import 'dotenv/config';

import Fastify from 'fastify';
import cors from '@fastify/cors';

import notFoundRoute from './routes/notFound.js';
import userRoute from './routes/user.js';

const { error, log } = console;
const fastify = Fastify({ logger: true });

fastify.register(cors);
fastify.register(userRoute, { prefix: 'api/v1/user' });
fastify.register(notFoundRoute);

fastify.listen(process.env.APP_PORT, (e) => {
  if (e) {
    error(`error booting server: ${e.message}`);
  } else {
    log(`${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`);
  }
});
