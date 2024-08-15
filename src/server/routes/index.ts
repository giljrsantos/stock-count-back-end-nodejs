import { Router } from 'express';

import { RedesController } from './../controllers';

const router = Router();

router.get('/api/v1/health', (_, res) => {
  return res.send('Olá, dev!');
});

router.post(
  '/api/v1/redes',
  RedesController.createBodyValidator,
  RedesController.create,
);

export { router };
