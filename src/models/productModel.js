import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
       productName:{
        type:String,
        required:[true,"please fill this place is required"]
       },

       productPrice:{
           type:Number,
           required:[true,"please fill this place is required"]
       },

       productDescription:{
        type:String,
        required:[true,"please fill this place is required"]
       },

       productnumber:{
              type:String,
              required:false
       }

},
{
  timestamps:true
})

const Product = mongoose.model("Product",productSchema)
export default Product;