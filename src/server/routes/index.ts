import { Router } from 'express';

import { RedesController } from './../controllers';

const router = Router();

router.get('/api/v1/health', (_, res) => {
  return res.send('O servidor esta rodando');
});

router.get(
  '/api/v1/redes',
  RedesController.getAllValidation,
  RedesController.getAll,
);

router.get(
  '/api/v1/redes/:id',
  RedesController.getByIdValidation,
  RedesController.getById,
);

router.post(
  '/api/v1/redes',
  RedesController.createValidation,
  RedesController.create,
);

router.put(
  '/api/v1/redes/:id',
  RedesController.updateByIdValidation,
  RedesController.updateById,
);

router.delete(
  '/api/v1/redes/:id',
  RedesController.deleteByIdValidation,
  RedesController.deleteById,
);

export { router };
