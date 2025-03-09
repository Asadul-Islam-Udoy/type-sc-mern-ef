import {Request, Response, NextFunction } from "express";

export const AsyncErrorHanler=(fun:Function)=>(req:Request,res:Response,next:NextFunction)=>{
   Promise.resolve(fun(req,res,next)).catch(next)
}