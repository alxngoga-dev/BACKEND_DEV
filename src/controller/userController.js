import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { accessToken } from "../utils/generate_key.js";



export const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password, userRole } = req.body;

   
    if (!firstname || !lastname || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      userRole,
    });

    await newUser.save();

    // create token
    const token = accessToken(newUser);

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        userRole: newUser.userRole,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    
    const token = accessToken(user);

    const loggedInUser = {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      userRole: user.userRole,
    };

    return res.status(200).json({
      message: "Logged in successfully",
      token,
      user: loggedInUser,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};



export const logout = async(req,res) =>{
     try {
           res.clearCookie("token");

           return res.status(200).json({success:true,message:"logout successfully"})
     } catch (error) {
          return res.status(500).json({success:true,message:error.message})
     }
}







