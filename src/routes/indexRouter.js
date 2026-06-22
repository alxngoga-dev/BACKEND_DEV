import { Router } from "express";
import contactRouter from "./contactRoutes.js";
import router from "./productRoute.js";
import userRouter from "./UserRoute.js";
import imageRouter from "./imageRoute.js";
import orderRouter from "./orderRouter.js";




const mainRouter = Router();

mainRouter.use("/product",router)
mainRouter.use("/contact",contactRouter)
mainRouter.use("/userrouter",userRouter)
mainRouter.use("/images", imageRouter)
mainRouter.use("/orders",orderRouter)



export default mainRouter;
