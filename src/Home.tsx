import { useEffect, useState, useCallback } from "react";
import ImportImage from "./myComponent/importImage";
import GallarySlide from "./myComponent/gallarySlide";
import { useTheme } from "@mui/material";
import React from "react";

function Home({ toggleDarkMode }) {
  const theme = useTheme();
  const [uploadedImage, setUploadedImage] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    index: number;
    src: string;
  } | null>(null);

  const handleFilesSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
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
      }
    },
    []
  );

  useEffect(() => {
    if (uploadedImage.length) {
      setSelectedImage({ index: 0, src: uploadedImage[0] });
    }
    setSelectedImage;
  }, [uploadedImage]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <header onClick={toggleDarkMode}>dslfj</header>
      <GallarySlide
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        uploadedImage={uploadedImage}
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

export default Home;
