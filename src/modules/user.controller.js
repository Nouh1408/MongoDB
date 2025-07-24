import { Router } from "express";
import * as US from "./user.service.js";
const router = Router()
router.post('/', US.createUser)
router.get('/',US.getAllUSers)
router.put('/:id',US.updateUser) 
export default router