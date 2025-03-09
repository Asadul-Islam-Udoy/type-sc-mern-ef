import { Request, Response, NextFunction } from "express";
const ErrorHandler = (err:any,req:Request,res:Response,next:NextFunction)=>{
    if(res.headersSent){
        next({
            success:false,
            message:err.message
        })
    }
    else{
        if(err.message){
            res.status(500).json({
                success:false,
                message:err.message
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:'somthing is wrong!'
            })  
        }
    }
}
export default ErrorHandler;