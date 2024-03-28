
import React from 'react'
import { useState } from 'react'
import { imgDB} from './firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid'

const App = () => {
  const [img, setImg] = useState('')

  const handleUploadChange =(e)=>{
console.log(e.target.files[0])
const imgs = ref(imgDB, `images/${v4()}`)
 uploadBytes(imgs, e.target.files[0])
 .then(data=>{
  console.log(data,"images")
  getDownloadURL(data.ref).then(val=>{
    console.log(val)
  })
 })
  }

  return (
    <div>
      <input type="file" onChange={(e)=>{handleUploadChange(e)}} />
    </div>
  )
}

export default App

