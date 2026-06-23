import { Router } from "express";
import { register,login,logout,getAllUsers} from "../controller/userController.js";



const userRouter = Router();

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.post("/logout",logout)
userRouter.get("/getallusers",getAllUsers)


export default userRouter;