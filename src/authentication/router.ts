import express from "express";
import { AuthController } from "./controller.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const userRouter = express.Router();

userRouter.post(
  "/tokens-generate",
  asyncHandler(AuthController.tokensGenerate)
);

userRouter.post("/vetify-token", asyncHandler(AuthController.vetifyToken));

export default userRouter;
