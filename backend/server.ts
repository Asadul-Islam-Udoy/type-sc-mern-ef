import app from './app';
import {NextFunction, Request,Response} from 'express'
import DbConnerction from './config/DbConnection';

DbConnerction();

const PORT = process.env.PORT || 8000

app.use('',(req:Request,res:Response)=>{
    console.log('run first code')
})

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(res.headersSent){
        next({
            success:false,
            message:err.message
        })
    }
    else{
        if(err.message){
            res.status(400).json({
                success:false,
                message:err.message
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:'somthing is wrong!'
            })  
        }
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})