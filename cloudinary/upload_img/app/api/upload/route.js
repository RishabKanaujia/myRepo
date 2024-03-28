import imageModel from '@/app/cloudinary/image.Model'
import { connectDB } from '@/app/cloudinary/mongodb'
import { uploadImage } from '@/app/cloudinary/uploadImg'
import {NextResponse} from 'next/server'

connectDB()

export const GET = async()=>{
    const images = await imageModel.find()
    return NextResponse.json({"msg":images},{"total":images.length})
}

export const POST = async(req) =>{
    const formData = await req.formData()
    const image = formData.get('image')
    console.log(image)
    const data =await uploadImage(image, "next-js imageStore")

    await imageModel.create({
        image_url:data?.secure_url,
        public_id:data?.public_id
    })

    return NextResponse.json({"msg":data})
}