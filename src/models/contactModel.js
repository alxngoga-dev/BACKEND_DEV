import mongoose  from "mongoose";


const ContactSchema = new mongoose.Schema({
    fullnames:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:[true,"please fill this place is required"]
    },

    subject:{
         type:String,
         required:false
    }

    
},
{
   timestamps:true
})

const Contact = mongoose.model("Contact", ContactSchema)

export default Contact;