import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/login',UserController.UserCreate)

export default router;