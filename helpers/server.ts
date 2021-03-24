// server.js
import JsonServer from 'json-server';
import path from 'path';
import auth from 'json-server-auth';

const server = JsonServer.create();
const middlewares = JsonServer.defaults();
const router = JsonServer.router(path.join(__dirname, 'db.json'));

server.use(middlewares);

// server.db = router.db;

server.use(auth);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
