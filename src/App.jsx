import { useEffect, useState, useCallback } from "react";
import ImportImage from "./myComponent/importImage";
import GallarySlide from "./myComponent/gallarySlide";

function App() {
  const [uploadedImage, setUploadedImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFilesSelect = useCallback(async (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        formData.append("images", file);
      } else {
        alert("Please upload image files only.");
      }
    });

    try {
      const response = await fetch("http://localhost:5500/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setUploadedImage((prev) => [...prev, ...data.fileURLs]);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  }, []);

  useEffect(() => {
    if (uploadedImage.length) {
      setSelectedImage(uploadedImage[0]);
    }
  }, [uploadedImage]);

  return (
    <div style={{ width: "100vw", height: "100vh", boxSizing: "border-box" }}>
      <GallarySlide
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <ImportImage
        handleClick={handleFilesSelect}
        type="icon"
        setSelectedImage={setSelectedImage}
        data={uploadedImage}
      />
    </div>
  );
}

export default App;
