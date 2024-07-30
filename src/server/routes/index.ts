import { Router } from 'express';
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get('/api/v1/health', (_, res) => {
    return res.send('Olá, dev!');
});

router.post('/api/v1/health', (req, res) => {
    console.log(req.body)
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});
  


export { router }