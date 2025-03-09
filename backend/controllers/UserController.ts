import { Request, Response } from "express";
import User from "../models/UserModel";
import UserTokenGet from "../token/UserTokenGet";
import { AsyncErrorHanler } from "../middleware/AsyncErrorHanler";
class UserController {
  public UserCreate = AsyncErrorHanler(async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "email is alread exist!",
      });
    }
    await User.create({
      username,
      email,
      password,
    });
    res.status(200).json({
      success: true,
      message: "user create successfully",
    });
  });

  public UserLogin = AsyncErrorHanler(
    async (req: Request, res: Response): Promise<any> => {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "email is not exist!",
        });
      }
      const match = await user?.ComparePassword(password);
      if (!match) {
        res.status(400).json({
          success: false,
          message: "invalid password",
        });
      }
      await UserTokenGet(user, 200, res);
    }
  );

  public UserLogout = AsyncErrorHanler(async (req: Request, res: Response) => {
      res.clearCookie("token", {
        httpOnly: true,
      });
      res.status(200).json({
        success: true,
        message: "logout successfully",
      });
  });


  public GetAllUsers = AsyncErrorHanler(async (req: Request, res: Response) => {
      const users = await User.find();
      res.status(200).json({
        success: true,
        message: "getting all users successfully",
        users,
      });
    
  });


  public GetSingleUser = AsyncErrorHanler(async (req: Request, res: Response) => {
      const user = await User.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "getting user successfully",
        user,
      }); 
  });

  
  public UserDelete = AsyncErrorHanler(async (req: Request, res: Response) => {
      const user = await User.findByIdAndDelete(req.params.id);
      if(!user){
        return res.status(400).json({
          success: false,
          message: "user delete fails!",
        });
      }
      res.status(200).json({
        success: true,
        message: "user delete successfully",
      });
  });

}


export default new UserController();
