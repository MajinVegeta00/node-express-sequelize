import { Router } from "express";
import { createComment, getCommentByPost } from "../../controllers/comment.js";
const routerComment=Router()

routerComment.post('/create',createComment)
routerComment.get('/getByPost/:postId',getCommentByPost)

export default routerComment