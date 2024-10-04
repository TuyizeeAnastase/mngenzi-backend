import categoryController from "../controllers/category.controller";
import express from 'express'

const router=express()

router.get('/',categoryController.getCategories)
router.get('/:id',categoryController.getCategory)

export default router;