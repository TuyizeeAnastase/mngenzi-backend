import {Product,Category} from '../database/models'

export const getAllProducts=async()=>{
    return await Product.findAndCountAll(
        {
            include:[
                {
                    model:Category,
                    as:'category'
                }
            ]
        }
    )
}

export const addProduct=async(product)=>{
    return await Product.create(product)
}

export const updateProduct=async(updated,product)=>{
    return await Product.update(updated,{where:{id:product.id}})
}

export const getProduct=async(id)=>{
  return await Product.findOne({
    where:{
        id:id
    }
  })
}

export const getProductByName=async(name)=>{
    return await Product.findOne({
        where :{
            name:name
        }
    })
}

export const deleteProduct=async(id)=>{
    const product=await Product.destroy({
        where:{id:id}
    })

    return product
}