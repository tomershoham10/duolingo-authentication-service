import { Router } from 'express';
import AuthController from './controller.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const authRouter = Router();
authRouter.get(
  '/getRecordZipPassword/:recordName',
  AuthController.getRecordZipPassword
);

authRouter.post(
  '/tokens-generate',
  asyncHandler(AuthController.tokensGenerate)
);

// authRouter.post("/authorization", asyncHandler(AuthController.getById));

export default authRouter;
