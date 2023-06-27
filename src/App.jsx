// import React from "react";
import { useState } from "react";
// import "./App.css";
import ImageUpload from "./myComponent";
import OnClickMakeImageBig from "./myComponent/OnClickMakeImageBig";
import DragDropImageUpload from "./myComponent/dragDrop";
import ImportImage from "./myComponent/importImage";
import SingleUpload from "./myComponent/singleUpload";

function App() {
  const [uploadedImage, setUploadedImage] = useState([]);
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith("image/")) {
      const base64Image = await fileToBase64(file);
      console.log("base64Image", base64Image);
      setUploadedImage(base64Image);
    } else {
      alert("Please upload an image file.");
    }
  };

  return (
    <>
      {/* multiple upload */}
      {/* <ImageUpload /> */}
      {/* drag drop */}
      {/* <DragDropImageUpload /> */}
      {/* single upload */}
      {/* <SingleUpload /> */}
      {/* oncoloce make image big
       */}
      {/* <OnClickMakeImageBig /> */}
      <ImportImage
        handleClick={handleFileSelect}
        type="icon"
        data={uploadedImage}
      />
      {/* <input type="file" name="" id="" onChange={handleFileUpload} /> */}
    </>
  );
}

export default App;
