import { UserId } from "../models/UserModel";

const UserTokenGet = async (user:UserId,statusCode:number,res:any)=>{
    const token = await user.UserTokenCreate();
    const options = {
        expires:new Date(Date.now() + 60 * 60 * 1000 * 24),
        httpOnly:true,
        sameSite: 'Strict',
    }
    res.status(200).cookie('token',token,options).json({
        success:true,
        message:'user getting successfully!',
        user:{
            username:user.username,
            email:user.email
        },
        token:token
    })
}

export default UserTokenGet;