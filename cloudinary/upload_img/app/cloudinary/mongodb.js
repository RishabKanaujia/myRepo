import mongoose  from "mongoose";

export const connectDB = async()=>{
    try {
        
        await mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/imageCloudinary")
    console.log("mongodb connected")
    } catch (error) {
        mongoose.disconnect();
        process.exit(1)
    }
}