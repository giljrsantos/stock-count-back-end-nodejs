import express from 'express';

import { router } from './routes';

const server = express();

server.use(express.json())

server.use(router);



// interface Teste {}


export { server };
