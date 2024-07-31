import express, { Request, Response } from 'express';

import {pool} from '../server/database/index';

import { authenticate } from './../middleware/index';

const routes = express.Router();

// Rota de exemplo para buscar dados após autenticação
routes.post(
  '/api/v1/login',
  authenticate,
  async (req: Request, res: Response) => {
    try {
      res.send(`Parabéns você esta conectado!!`);
    } catch (err) {
      res.status(500).send(` Server error: ${err}`);
    }
  },
);

// Rota de busca das redes cadastradas após autenticação
routes.get(
  '/rede',
  authenticate,
  async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM Inv_rede',
      );

      if (!rows) {
        return res.status(404).send('No data found.');
      }

      res.json(rows);
    } catch (err) {
      console.error('Error occurred:', err);
      res.status(500).send(` Server error: ${err}`);
    }
  },
);

export default routes;
