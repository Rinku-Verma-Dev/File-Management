import { useState } from "react";

const DragDropImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith("image/")) {
      setUploadedImage(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file.");
    }
  };
  return (
    <div
      style={{
        border: "2px dashed #ccc",
        width: "300px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {uploadedImage ? (
        <img
          src={uploadedImage}
          alt="Uploaded"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        <p>Drag and drop an image here</p>
      )}
    </div>
  );
};

export default DragDropImageUpload;
