import productController from "../controllers/product.controller";
import express from 'express'
import { protect,restrictTo } from "../middleware/protect.middleware";
import { productValidations } from "../validations/product.validations";

const router=express()

router
.route('/')
.get(productController.getProducts)
.post(protect,restrictTo("admin"),productValidations,productController.createProduct)

router
.route('/:id')
.patch(protect,restrictTo("admin"),productController.updateProduct)

export default router;