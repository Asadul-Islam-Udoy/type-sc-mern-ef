import { Request, Response } from "express";
import User from "../models/UserModel";
class UserController {
  public UserCreate = async (req: Request, res: Response) => {
    try {
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
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}

export default new UserController();
