import cloadinary from "cloudinary";

export const checkUploadImage=async(req,res,next)=>{
    if (req.files) {
        const file = req.files.image;
        cloadinary.uploader.upload(file.tempFilePath, async (results, err) => {
          if (err) {
            res.status(500).json({
              message: "Unable to upload product image",
              error: err,
            });
          }
          req.results = results;
          next();
        });
      } else {
        return res.status(400).json({
          message:'Please upload product image'
      })
      }
}



export const checkUploadImageFormart = (...extensions) => {
  return (req, res, next) => {
    if (req.results) {
      const results = req.results;
      if (!extensions.includes(results.format.toLowerCase())) {
        return res.status(405).json({
          message: `Only ${extensions} format is allowed`,
        });
      } else {
        req.image_url = results;
        next();
      }
    } else {
      next();
    }
  };
};