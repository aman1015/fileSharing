import mongoose from "mongoose";

const DBConnection=async ()=>{
    const MONGO_URL='mongodb+srv://superaman200:hIcMdiGFqqhYofXe@file-sharing.sdvraoa.mongodb.net/';
    try{
        await mongoose.connect(MONGO_URL, {useNewUrlParser: true});
        console.log('database connected successfully');
    }catch(error){
        console.error('error while connecting database', error.message);
    }
}

export default DBConnection;