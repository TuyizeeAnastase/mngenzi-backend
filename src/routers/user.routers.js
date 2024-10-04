import userController from "../controllers/user.controllers";
import express from 'express'
import { userValidation,loginValidation } from "../validations/user.validations";
import { checkUserExist,checkUserByEmail } from "../middleware/user.middleware";


const router = express();

router.post('/register',userValidation,checkUserExist,userController.registeringUser)
router.post('/login',loginValidation,checkUserByEmail,userController.login)

export default router;