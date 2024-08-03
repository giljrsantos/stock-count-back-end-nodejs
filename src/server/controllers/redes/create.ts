import { Request, Response } from 'express';
import { IRedes } from '../../../interface/i-Redes';

export const create = (
  req: Request<{}, {}, IRedes>,
  res: Response,
) => {
  console.log(req.body);

  return res.send(req.body);
};
