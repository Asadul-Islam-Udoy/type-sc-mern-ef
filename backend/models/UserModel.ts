import { NextFunction } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose,{Schema,Document} from "mongoose";
export interface UserId extends Document{
    username:string,
    email:string,
    password:string,
    ComparePassword(password:string):Promise<boolean>,
    UserTokenCreate():Promise<string>
}
const UserSchema = new Schema<UserId>({
   username:{
    type:String,
    required:true,
    trim:true,
    maxlength:[30,'max langth 30 character']
   },
   email:{
    type:String,
    required:true,
    unique:[true,'email must be unique']
   },
   password:{
    type:String,
    required:true,
    select:false
   }
},{timestamps:true});

UserSchema.pre("save",async function (next) {
    const user = this as UserId;
    if(!user.isModified('password')) return next();
    const solt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,solt);
    next()
});

UserSchema.methods.ComparePassword = async function(password:string):Promise<boolean>{
  return  bcrypt.compare(password,this.password);
}

UserSchema.methods.UserTokenCreate = async function ():Promise<string>{
  return await jwt.sign({_id:this._id},process.env.JWT_SCRECT!,{expiresIn:'1h'})
}
const user =  mongoose.model<UserId>('User',UserSchema);
export default user