import {Cart} from '../database/models'
import { Op } from "sequelize";

export const getAllCartByUser=async(user_id)=>{
    return await Cart.findAndCountAll(
        {
            where:{
                user_id:user_id
            }
        }
    )
}

export const getAllCarts=async()=>{
    return await Cart.findAndCountAll({})
}

export const getCart=async(id)=>{
    return  await Cart.findOne({
        where:{
            id:id
        }
    })
}

export const checkCart=async(product_id,user_id)=>{
   return await Cart.findOne(
        {
            where: {
                [Op.and]: [{ product_id }, { user_id }],
              },
        }
    )

}


export const checkUserCart=async(user_id)=>{
    return await Cart.findAndCountAll({
        where:{
            user_id:user_id
        }
    })
}

export const addCart=async(cart)=>{
    return await Cart.create(cart)
}

export const updateCart=async(updated,id)=>{
    return await Cart.update(
        updated,
        {
            where:{
                id:id
            }
        }
    )
}


export const deleteCart=async(id)=>{
    return await Cart.destroy({
        where:{
            id:id
        }
    })
}