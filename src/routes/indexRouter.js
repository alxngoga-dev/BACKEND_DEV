import { Router } from "express";
import contactRouter from "./contactRoutes.js";
import router from "./productRoute.js";
import userRouter from "./UserRoute.js";




const mainRouter = Router();

mainRouter.use("/product",router)
mainRouter.use("/contact",contactRouter)
mainRouter.use("/userrouter",userRouter)


 
export default mainRouter;
