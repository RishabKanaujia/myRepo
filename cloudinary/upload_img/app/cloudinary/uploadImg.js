import cloudinary from "./cloudinary";

export const uploadImage = async (file, folder) => {
   
     const  buffer = await file.arrayBuffer();
     const byteData = Buffer.from(buffer)

  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader.upload_stream({
      resource_type: "auto",
      folder: folder,
    }, async (err, result)=>{
        if(err){
           return reject(err.message)
        }
        return resolve(result)
    }).end(byteData);
  });
};
