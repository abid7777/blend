import 'dotenv/config';

import Fastify from 'fastify';

const { log } = console;
const fastify = Fastify({ logger: true });

fastify.get('/', (_, res) => res.send('hi'));

fastify.listen(process.env.APP_PORT, () => log(`${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`));
