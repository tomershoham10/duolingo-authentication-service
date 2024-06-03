import express from "express";
import AuthController from "./controller.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const userRouter = express.Router();
userRouter.get("/getRecordZipPassword", AuthController.getRecordZipPassword);

userRouter.post("/tokens-generate", asyncHandler(AuthController.tokensGenerate));

// userRouter.post("/authorization", asyncHandler(AuthController.getById));

export default userRouter;
