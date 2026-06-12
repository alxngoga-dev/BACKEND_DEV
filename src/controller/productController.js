import Product from "../models/productModel.js";


const Createproduct = async(req,res) =>{
      try {
            const{productName,productPrice,productDescription, productnumber} = req.body
            const newproduct = await Product.create({
                productName,
                productPrice,
                productDescription,
                productnumber,
            })  
            return res.status(201).json({ status:201,message:"product created successfully",newproduct})
      } catch (error) {
          return res.status(500).json({status:500,message:error.message})
      }
}

export default Createproduct;   
