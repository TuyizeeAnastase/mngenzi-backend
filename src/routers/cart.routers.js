import cartController from "../controllers/cart.controleer";
import express from 'express'
import { cartValidations,quantityValidation } from "../validations/cart.validations";
import { checProductExist,checkCartExistByUser,checkCartExist,checkCartExistById } from "../middleware/cart.middleware";
import { protect,restrictTo } from "../middleware/protect.middleware";

const router=express()

router
.route('/')
.get(protect,restrictTo('admin'),cartController.getCarts)

router
.route('/user')
.get(protect,restrictTo('customer'),checkCartExist,cartController.getCartByUser)

router
.route('/:id')
.patch(protect,restrictTo('customer'),checkCartExistById,quantityValidation,cartController.updateCartQuantity)
.delete(protect,restrictTo('customer'),checkCartExistById,cartController.cartDeleting)

router.post('/',protect,restrictTo('customer'),cartValidations,checProductExist,checkCartExistByUser,cartController.addToCart)

export default router