import { getProduct } from "../services/product.services"
import { checkCart,addCart,checkUserCart,updateCart,getCart } from "../services/cart.services"

export const checProductExist=async(req,res,next)=>{
    const {product_id}=req.body
    const product=await getProduct(product_id)
    if(!product){
        return res.status(404).json({
            message:`Product doesn't exist`
        })
    }
    req.product=product;
    next();
}

export const checkCartExist=async (req,res,next)=>{
    const user=req.user
    const cart=await checkUserCart(user.id)
    if(!cart){
        return res.status(404).json({
            message:`You don't have any cart`
        })
    }
    req.cart=cart
    next();
}

export const checkCartExistByUser=async (req,res,next)=>{
    const user=req.user
    const product=req.product
    const quantity=req.body.quantity??1
    const cart=await checkCart(product.id,user.id)
    if(cart){
     const newQuantity=cart.quantity+quantity
     const total=cart.price*newQuantity
     const updated={
        quantity:newQuantity,
        total_price:total
     }   
     await updateCart(updated,cart.id)
     const updatedCart={
            product_id:product.id,
            user_id:user.id,
            quantity:newQuantity,
            price:product.price,
            total_price:total
     }
     req.cart=updatedCart
     next()
    }
    const total=product.price*quantity
    const newCart={
            product_id:product.id,
            user_id:user.id,
            quantity:quantity,
            price:product.price,
            total_price:total
        }
        const addedCart=await addCart(newCart)
        req.cart=addedCart
       next();
}


export const checkCartExistById=async(req,res,next)=>{
    const {id}=req.params
     const cart=await getCart(id)
     if(!cart){
        return res.status(404).json({
            message:`Cart doesn't exist`
        })
     }
     req.cart=cart
     next()
}

