import { server } from './server/server';
// import express from 'express';

// import bodyParser from 'body-parser';

// import routes from './router';

// const app = express();

const port = 8086;

// app.use(bodyParser.json());

// app.use('/api/v1', routes);

server.listen(port, () => {
  console.log(`Api running on port ${port}`);
});
