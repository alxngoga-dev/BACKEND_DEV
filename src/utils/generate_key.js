import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const accessToken = (payload) => {
    payload = {
        id: payload._id,
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        userRole: payload.userRole,
        passsword: payload.passsword
    };

    const secretkey = process.env.JWT_SECRET_KEY;
    return jwt.sign(payload,secretkey,{expiresIn:'1d'})
}