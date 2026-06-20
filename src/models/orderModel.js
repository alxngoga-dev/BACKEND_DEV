import mongoose from "mongoose";


const orderSchema = mongoose.Schema(
    {
        order:{
             type:String,
             required:true,
             unique:true,
        },
          
        customer:{
            type:String,
            required:true,
        },

        product:{
            type:String,
            required:true,
        },

        status:{
            type:String,
            enum:["Pending","Paid","Shipped","Delivered","Cancelled"],
            default:"Pending",

        },

        total:{
            type:Number,
            required:true,
        },

        orderDate:{
            type:Date,
            default:Date.now,
        }
    },

    {
        timestamps:true
    }
) 

const Order = mongoose.model("Order",orderSchema);

export default Order;