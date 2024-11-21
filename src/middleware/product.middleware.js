import { getProductByName,getProduct } from "../services/product.services";

export const checkProductExist=async(req,res,next)=>{
    const {name}=req.body
    const product=await getProductByName(name)
    if(!product){
        return res.status(404).json({
            message:`Product doesn't exist`
        })
    }
    next();
}

export const checProductExistById=async(req,res,next)=>{
    const {id}=req.params
    const product=await getProduct(id)
    if(!product){
        return res.status(404).json({
            message:`Product doesn't exist`
        })
    }
    req.product=product;
    next();
}

export const checProductDoesNotExist=async(req,res,next)=>{
    const {name}=req.body
    const product=await getProductByName(name)
    if(product){
        return res.status(404).json({
            message:`Product already exist`
        })
    }
    next();
}