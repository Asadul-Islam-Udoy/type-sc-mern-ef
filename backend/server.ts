import app from './app';
import {NextFunction, Request,Response} from 'express'
import DbConnerction from './config/DbConnection';

DbConnerction();

const PORT = process.env.PORT || 8000

app.use('',(req:Request,res:Response)=>{
    console.log('run first code')
})



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})