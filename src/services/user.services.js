import {User} from '../database/models'

export const registerUser=async(user)=>{
    return await User.create(user)
}

export const getAllUsers=async()=>{
    const users=await User.findAndCountAll([])
    return users
}

export const userUpdate=async(updated,user)=>{
    return await User.update(updated,{where:{id:user.id}})
}

export const getUserById=async(id)=>{
    return await User.findOne({
        where:{
            id:id
        }
    })
}


export const userDelete=async(id)=>{
    const user=await User.destroy({
        where:{id:id}
    })
    return user;
}

