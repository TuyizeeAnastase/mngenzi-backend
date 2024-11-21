import joi from 'joi'


export const productValidations=async(req,res,next)=>{
    const productSchema=joi.object({
        name:joi.string().required().messages({
            "any.required":"Name is required"
        }),
        category_id:joi.number().integer().required().messages({
            "any.required":"Category is required"
        }),
        price:joi.number().integer().required().messages({
            "any.required":"Price is required"
        }),
        quantity:joi.number().integer().required().messages({
            "any.required":"Quantity is required"
        }),
        description:joi.string().required().messages({
            "any.required":"Descripption is required"
        }),
        is_featured:joi.boolean().required().messages({
            "any.required":"Featured is required"
        }),
        is_available:joi.boolean().required().messages({
            "any.required":"Availability is required"
        }),
        brand:joi.string().required().messages({
            "any.required":"brand is required"
        }),
        rating:joi.number().integer().required().messages({
            "any.required":"Rating is required"
        }),
    });
    const value=await productSchema.validate(req.body);
    if(value.error){
        res.status(400).json({
            message:value.error.details[0].message,
        });
    }else{
        next();
    }
}