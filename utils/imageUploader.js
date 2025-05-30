
const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  try {
    const options = { folder };

    if (height) options.height = height;
    if (quality) options.quality = quality;

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    // Just throw the error or return an object to be handled by the caller
    throw new Error("Error while uploading image, please try again");
  }
};

// const cloudinary=require("cloudinary").v2;


// exports.uploadImageToCloudinary =async(file,folder,height,quality)=>{
//   try{
//     const options={folder};

//     //height and quality for compression
//     if(height){
//       options.height=height;
//     }

//     if(quality){
//       options.quality=quality;
//     }

//     options.resource_type="auto";

//     return await cloudinary.uploader.upload(file.tempFilePath,options);

//   }
//   catch(error){
//     return res.status(500).json({
//       success:false,
//       message:"Error while uploading image, please try again"
//     })
//   }
// }