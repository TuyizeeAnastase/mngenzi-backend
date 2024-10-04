import joi from 'joi'

export const userValidation=async(req,res,next)=>{
    const userSchema=joi.object({
        email:joi.string().email().required().messages({
            "any.required":"Email is required"
        }),
        name:joi.string().required().messages({
            "any.required":"Name are required"
        }),
        password: joi.string().min(8).required().messages({
            "any.required": "Password required",
            "string.min": "New Password require 8 characters",
          }),
        confirm_password: joi.string().required().messages({
            "any.required": "Confirm Password required",
          }),
    });
    const value = await userSchema.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
}

export const loginValidation=async(req,res,next)=>{
  const userSchema=joi.object({
    email:joi.string().email().required().messages({
        "any.required":"Email is required"
    }),
    password: joi.string().required().messages({
        "any.required": "Password required",
      })
});
const value = await userSchema.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
}
