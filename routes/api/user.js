import express from "express";
import { createUser, getAllUser } from "../../controllers/user.js";

const userRouter = express.Router();
userRouter.get('/get',getAllUser);
userRouter.post('/post',createUser);

export default userRouter;
