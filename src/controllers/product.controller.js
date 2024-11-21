import { getAllProducts,addProduct,updateProduct,getProduct,deleteProduct } from "../services/product.services";

export class productControllers{
    async getProducts(req,res){
        try{
            const products=await getAllProducts()
            return res.status(200).json({
                products
            })
        }catch(error){
            return res.status(500).json({
                message:"Error while getting products",
                error:error.message
            })
        }
    }

    async createProduct(req,res){
        try{
            const image=req.results.secure_url
            const newProduct=await addProduct({...req.body,image_url:image})

            return res.status(201).json({
                message:'New product added successfully',
                newProduct,
            });
        }catch(error){
            return res.status(500).json({
                message:"Unable to add new product",
                error:error.message,
            })
        }
    }

    async updateProduct(req,res){
        try{
            const product=req.product;
            const {name,category_id,price,discount,quantity,description,image_url,is_featured,rating,brand,is_available}=req.body
            await updateProduct(
                {name,category_id,price,discount,quantity,description,image_url,is_featured,rating,brand,is_available},
                product
        );
        return res.status(200).json({
            product:{id:product.id,...req.body}
        });
        }catch(error){
            return res.status(500).json({
                message:'Error while updating product',
                error:error.message,
            })
        }
    }

    async getProduct(req,res){
       try{
        const product=req.product;
        return res.status(200).json({
            product
        })
       }
       catch(error){
        return res.status(500).json({
            message:"Error while getting product",
            error:error.message
        })
       }
    }

}

const productController=new productControllers;
export default productController