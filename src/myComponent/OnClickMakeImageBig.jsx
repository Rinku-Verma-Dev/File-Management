
import { useState } from "react";

const OnClickMakeImageBig = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

  const handleFilesSelect = async (e) => {
    const files = e.target.files;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        const base64Image = await fileToBase64(files[i]);
        images.push(base64Image);
      } else {
        alert("Please upload image files only.");
      }
    }
    setUploadedImages(images);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
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
    margin: "0.5rem",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const largeImgStyle = {
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain",
  };

  return (
    <div style={containerStyle}>
      <div>
        {uploadedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded-${index}`}
            style={imgStyle}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <input type="file" multiple onChange={handleFilesSelect} />
      {selectedImage && (
        <div style={overlayStyle} onClick={handleCloseClick}>
          <img src={selectedImage} alt="Selected" style={largeImgStyle} />
        </div>
      )}
    </div>
  );
};

export default OnClickMakeImageBig;