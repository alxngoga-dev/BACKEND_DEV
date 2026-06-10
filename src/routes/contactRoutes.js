import { Router } from "express";
import { CreateContact,getAllcontacts,getContactById,updateContact ,DeleteContact} from "../controller/contactController.js";


const contactRouter = Router();

contactRouter.post("/createContact",CreateContact)
contactRouter.get("/get-allcontact",getAllcontacts)
contactRouter.get("/get-contactById",getContactById)
contactRouter.patch("/update-Contact/:id",updateContact)
contactRouter.delete("/delete-contact/:id",DeleteContact)


export default contactRouter;