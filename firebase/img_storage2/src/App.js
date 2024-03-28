import React, { useEffect, useState } from "react";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const App = () => {
  const [imageUpload, setimageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "imagebox/");
  const handleClick = () => {
    // console.log(imageUpload)
    if (imageUpload == null) {
      return;
    }
    const imageRef = ref(storage, `imagebox/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image saved");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  },[]);

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setimageUpload(e.target.files[0]);
        }}
      />
      <button onClick={handleClick}>upload image</button>
      {imageList.map((url,index) => {
        return <img width={100} key={index} src={url} alt="" />;
      })}
    </div>
  );
};

export default App;
