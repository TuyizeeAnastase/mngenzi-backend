import express from 'express'
import userRouters from './user.routers'
import categoryRouters from './category.routers'
import productRouters from './products.routers'
import cartRouters from './cart.routers'

const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome"
    })
})

routes.use("/api/v1/users",userRouters)
routes.use("/api/v1/category",categoryRouters)
routes.use("/api/v1/products",productRouters)
routes.use("/api/v1/carts",cartRouters)

routes.get("*",(req,res)=>{
    res.status(404).json({
        message:"Page not found, Try again"
    });
});

export default routes;