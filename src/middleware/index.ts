import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

import pool from '../server/database/index';

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { usuario, senha } = req.body;

  const hash = crypto
    .createHash('sha256')
    .update(senha)
    .digest('hex');

  if (!usuario || !senha) {
    return res
      .status(400)
      .send('Login and password are required');
  }

  try {
    const [rows] = await pool.query(
      `SELECT * FROM Inv_operador WHERE usuario = ? AND senha = ?`,
      [usuario, hash],
    );

    if (Array.isArray(rows) && rows.length > 0) {
      next();
    } else {
      res.status(401).send('Invalid login or password');
    }
  } catch (err) {
    res.status(500).send(`Server Error: ${err}`);
  }
};
