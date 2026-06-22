import {Router} from "express";
import { createOrder,getAllorder,getOrderByid,updateOrder,deleteorder} from "../controller/orderController.js";


const orderRouter = Router();

orderRouter.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Order router works"
    });
});


orderRouter.post("/create-order",createOrder)
orderRouter.get("/get-allOrders",getAllorder)
orderRouter.get("/getorderByid/:id",getOrderByid)
orderRouter.put("/Update-status/:id",updateOrder)
orderRouter.patch("/update-status/:id",updateOrder)
orderRouter.delete("/deleteByid/:id",deleteorder)



export default orderRouter;


