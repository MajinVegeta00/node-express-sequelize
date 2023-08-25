import { Router } from "express";
import { login } from "../../controllers/auth.js";
const routerAuth=Router()

routerAuth.post('/login',login)

export default routerAuth