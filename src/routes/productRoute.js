import { Router } from "express";
import Createproduct from "../controller/productController.js"


const router = Router();

router.post("/create-product",Createproduct)


export default router;
