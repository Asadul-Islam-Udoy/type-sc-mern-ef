import express from 'express';
import UserController from '../controllers/UserController';
import { UserMiddleware } from "../middleware/UserMiddleware";
const router = express.Router();

router.post('/register',UserController.UserCreate);
router.post('/login',UserController.UserLogin);
router.get('/logout',UserController.UserLogout);
router.get('/all',UserMiddleware,UserController.GetAllUsers);
router.get('/single/:id',UserMiddleware,UserController.GetSingleUser);
router.delete('/delete/:id',UserController.UserDelete);

export default router;