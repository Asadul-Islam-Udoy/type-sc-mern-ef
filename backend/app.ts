import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import ErrorHandler from './middleware/ErrorMiddleware';
import UserRouter from './routers/UserRouter';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config({path:'.env'});
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(ErrorHandler);
app.use(cookieParser());


app.use('/api/users',UserRouter);
export default app;