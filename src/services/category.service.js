import {Category,Product} from '../database/models'


export const getAllCategory=async()=>{
    return await Category.findAndCountAll({
        include:[
            {
              model:Product,
              as:'products'
            }
        ]
    })
}

export const getCategoryById=async(id)=>{
    return await Category.findOne({
        where:{
            id:id
        }
    })
}