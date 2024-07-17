import { Router, Request, Response } from 'express';
import authRouter from './authentication/router.js';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  console.log('health');
  res.status(200).send('Alive');
});

router.use('/api/auth/', authRouter);

export default router;
