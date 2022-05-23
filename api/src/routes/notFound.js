export default function notFoundRoute(instance, _, done) {
  instance.setNotFoundHandler((__, res) => res.status(404).type('application/json').send({ message: 'not found' }));
  done();
}
