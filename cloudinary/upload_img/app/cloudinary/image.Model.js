import mongoose  from "mongoose";

const ImageSchema = new mongoose.Schema({},{ strict: false })

const imageModel = mongoose.models.image || mongoose.model("image", ImageSchema)

export default imageModel