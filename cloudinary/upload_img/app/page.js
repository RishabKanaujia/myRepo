"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [image, setImage] = useState(null);
  const onChangeHandler = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      // console.log(e.target.files[0]);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!image) {
        return;
      }

      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post("/api/upload", formData);
      const data = await response.data
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className=" w-1/2 mx-auto py-10">
        <input type="file" name="" id="" onChange={onChangeHandler} />
        <button onClick={onSubmitHandler} className="bg-black p-4 rounded-lg text-white"> upload </button>
      </form>
    </>
  );
};

export default Page;
