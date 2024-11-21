import productController from "../controllers/product.controller";
import express from 'express'
import { protect,restrictTo } from "../middleware/protect.middleware";
import { productValidations } from "../validations/product.validations";
import { checkCategoryExist } from "../middleware/category.middleware";
import {checkUploadImage,checkUploadImageFormart} from "../middleware/uploading.middleware"
import { checProductDoesNotExist,checProductExistById } from "../middleware/product.middleware";

const router=express()

router
.route('/')
.get(productController.getProducts)
.post(protect,restrictTo("admin"),productValidations,checkUploadImage,checkUploadImageFormart("png","jpg"),checkCategoryExist,checProductDoesNotExist,productController.createProduct)

router
.route('/:id')
.patch(protect,restrictTo("admin"),checProductExistById,productController.updateProduct)
.get(checProductExistById,productController.getProduct)

export default router;