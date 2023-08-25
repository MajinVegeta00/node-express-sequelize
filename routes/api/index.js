import { Router } from "express";
import userRouter from "./user.js";
import postRouter from "./post.js";
import routerComment from './comments.js'
import routerAuth from "./auth.js";
const route=Router()

route.use('/post',postRouter)
route.use('/user',userRouter)
route.use('/comment',routerComment)
route.use('/auth',routerAuth)
export default route