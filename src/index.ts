import { app } from './server/server';
// import express from 'express';

// import bodyParser from 'body-parser';

// import routes from './router';

// const app = express();

const port = 3000;

// app.use(bodyParser.json());

// app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
