import { getAllCarts,getAllCartByUser,getCart, updateCart, deleteCart } from "../services/cart.services";


export class cartControllers{
    async getCarts(req,res){
        try{
            const carts=await getAllCarts()
            return res.status(200).json({
                carts
            })
        }catch(error){
            return res.status(500).json({
                message:"Error while getting carts",
                error:error.message
            })
        }
    }

    async addToCart(req,res){
        try{
            const cart=req.cart
            return res.status(201).json({
                cart
            })
        }catch(error){
            return res.status(500).json({
                message:'Error while adding to cart',
                error:error.message
            })
        }
    }

    async getCartByUser(req,res){
        try{
            const cart=req.cart
            return res.status(200).json({
                cart
            })
        }catch(error){
            return res.status(500).json({
                message:'Error while adding to cart',
                error:error.message
            })
        }
    }

    async updateCartQuantity(req,res){
        try{
            const cart=req.cart
            const {quantity}=req.body
            const total=cart.price * quantity
            const updated={
                quantity:quantity,
                total_price:total
            }
            await updateCart(updated,cart.id)
            res.status(201).json({
                message:'Cart updated successfully',
                cart:{ id: cart.id, ...req.body },
            })
        }catch(error){
            return res.status(500).json({
                message:'Error while updating cart',
                error:error.message
            })
        }
    }

    async cartDeleting(req,res){
        try{
            const cart=req.cart
            await deleteCart(cart.id)
            res.status(200).json({
                message:'Cart removed successfully'
        })
        }catch(error){
            return res.status(500).json({
                message:'Error while deleting to cart',
                error:error.message
            })
        }
    }
}

const cartController=new cartControllers()
export default cartController