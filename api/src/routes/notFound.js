export default function notFoundRoute(instance, _, done) {
  instance.setNotFoundHandler((__, res) => res
    .status(404)
    .type('application/json')
    .send({ statusCode: 404, message: 'not found' }));
  done();
}
