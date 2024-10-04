import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

export const getToken=(params)=>{
    const token=jwt.sign(params,process.env.SECRET_KEY || "loginTOkenKey",
        {
            expiresIn:process.env.EXPIRE_IN || "370d",
        }
    );

    return token;
}

export const decoding=(token)=>{
    const payload = jwt.verify(token, process.env.SECRET_KEY || "loginTokenKey");
    console.log(payload)
    return payload
}