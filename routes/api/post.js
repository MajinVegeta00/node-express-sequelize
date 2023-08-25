import { Router } from "express";
import { createPost, getAllPost, getPostById } from "../../controllers/post.js";

const postRouter=Router()
 
postRouter.post('/post',createPost)
postRouter.get('/get',getAllPost)
postRouter.get('/getById/:id',getPostById)  
export default postRouter