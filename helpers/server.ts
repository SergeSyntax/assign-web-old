import path from 'path';
// server.js
import JsonServer from 'json-server';
const server = JsonServer.create();
const router = JsonServer.router(path.join(__dirname, 'db.json'));
const middleware = JsonServer.defaults();

server.use(middleware);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
