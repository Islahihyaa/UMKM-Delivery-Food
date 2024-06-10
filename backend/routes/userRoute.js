import express from 'express';
import { loginUser, registerUser, refreshTokenHandler } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/refresh-token", refreshTokenHandler);

export default userRouter;