import { getCategoryById } from '../services/category.service'

export const checkCategoryExist=async(req,res,next)=>{
    const {category_id}=req.body
    const category=await getCategoryById(category_id)
    if(!category){
        return res.status(400).json({
            message:`Category doesn't exist`
        })
    }
    next();
}