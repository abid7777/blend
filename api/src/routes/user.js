import { createUser, updateUser } from '../controllers/userController.js';

export default async function userRoute(fastify) {
  fastify.post('/', createUser);
  fastify.patch('/', updateUser);
}
