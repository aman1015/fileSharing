
import File from "../models/file.js";
export const uploadImage= async (req,res)=>{
   const fileobj={
    path:req.file.path,
    name:req.file.originalname
   } 

try{
    const file=await File.create(fileobj);
    res.status(200).json({path : `${window.location.origin}/${file._id}`})

}catch(error){
    console.error(error.message);
    res.status(500).json({error: error.message});
}
}

export const downloadImage=async (req,res) =>{
    try{
        const file=await File.findById(req.params.fileId);
        file.downloadContent++;
        await file.save();
         res.download(file.path, file.name);
    } catch(error){
        console.error(error.meassage);
        return res.status(500).json({error: error.meassage})
    }
}

