import express from 'express';

const app = express();

// interface Teste {}

app.get('/', (req, res) => {
  return res.send('Ol, dev!');
});

export { app };
