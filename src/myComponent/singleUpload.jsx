import { useState } from "react";

const SingleUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

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
      setUploadedImage(base64Image);
    } else {
      alert("Please upload an image file.");
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    width: "300px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      {uploadedImage ? (
        <img src={uploadedImage} alt="Uploaded" style={imgStyle} />
      ) : (
        <div
          style={{
            ...imgStyle,
            border: "2px dashed #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>No image selected</p>
        </div>
      )}
      <input type="file" onChange={handleFileSelect} />
    </div>
  );
};

export default SingleUpload;