import joi from 'joi'

export const cartValidations=async(req,res,next)=>{
    const cartSchema=joi.object({
        product_id:joi.number().integer().required().messages({
            "any.required":"Product is required"
        }),
    }).options({ allowUnknown: true });
    const value=await cartSchema.validate(req.body);
    if(value.error){
        res.status(400).json({
            message:value.error.details[0].message,
        });
    }else{
        next();
    }
}

export const quantityValidation=async(req,res,next)=>{
    const quantitySchema=joi.object({
        quantity:joi.number().integer().required().messages({
            "any.required":"Quantity is required"
        }),
        product_id:joi.number().integer().required().messages({
            "any.required":"Product is required"
        })
    })
    const value=await quantitySchema.validate(req.body)
    if(value.error){
        res.status(400).json({
            message:value.error.details[0].message,
        });
    }else{
        next();
    }
}