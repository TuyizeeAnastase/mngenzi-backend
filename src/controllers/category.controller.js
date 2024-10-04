import { getCategoryById,getAllCategory } from "../services/category.service";

export class CategoryControllers{
    async getCategories(req,res){
        try{
            const categories=await getAllCategory()
            return res.status(200).json({
                categories
            })
        }catch(error){
            return res.status(500).json({
                message:'Unable to get all categories, try again',
                error:error.message,
            })
        }
    }

    async getCategory(req,res){
        try{
            const category=await getCategoryById(req.params.id)
            return res.status(200).json({
                category
            })
        }catch(error){
            return res.status(500).json({
                message:'Unable to get category, try again',
                error:error.message,
            })
        }  
    }
}

const categoryController=new CategoryControllers;
export default categoryController;
