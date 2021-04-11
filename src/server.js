const Hapi = require('@hapi/hapi');
// files
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host:
      process.env.NODE_ENV === 'development'
        ? 'localhost'
        : 'dicoding-bookshelf.herokuapp.com',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
