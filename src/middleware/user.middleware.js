import {User,Role} from '../database/models'

export const checkUserExist=async(req,res,next)=>{
    const {email}=req.body
    const user=await User.findOne({
        where:{
            email:email
        }
    })
    if(user){
        return res.status(400).json({
            message:'User already exist'
        })
    }
    next();
}

export const checkUserByEmail=async(req,res,next)=>{
    const {email}=req.body
    const user=await User.findOne({
        where:{
            email:email
        },
        include: [
            {
              model: Role,
              as: "role",
            },
          ],
    })
    if(!user){
        return res.status(400).json({
            message:'User does not exist'
        })
    }
    req.user=user
    next();
}
