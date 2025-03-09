import jwt from 'jsonwebtoken';
import User from '../models/UserModel'
import { NextFunction , Response,Request} from 'express';
import { UserId } from "../models/UserModel"; 

declare global{
    namespace Express{
        interface Request{
            user?:UserId
        }
    }
}

export const UserMiddleware = async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
   const {token} =req.cookies
   if(!token){
    res.status(400).json({
        success:false,
        message:'invalid token!'
    })
   }
   const decode:any = await jwt.verify(token,process.env.JWT_SCRECT!);
   const user = await User.findById(decode._id);
   if(!user){
    return res.status(400).json({
        success:false,
        message:'user is not found!'
    })
   }
   req.user = user;
   console.log('user',req.user)

   next();
}