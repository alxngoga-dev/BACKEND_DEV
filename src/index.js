import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import mainRouter from "./routes/indexRouter.js";



const app = express();
dotenv.config();

app.use(express.json());



const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use("/api/v1",mainRouter)

mongoose.connect(MONGOURL).then(() =>{
     console.log("Database connected successfully");
     app.listen(PORT,() =>{
        console.log(`server is running on port ${PORT}`);
        
     });
     
})
.catch((error) =>console.log(error))

