/* eslint-disable react/prop-types */
import PhotoTwoToneIcon from "@mui/icons-material/PhotoTwoTone";
import { useEffect } from "react";

function GallarySlide({ selectedImage = null }) {
  useEffect(() => {
    console.log("selectedImage", selectedImage);
  }, [selectedImage]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "skyblue",
          width: "100vw",
          maxWidth: "100%",
          flexDirection: "column",
          height: "60vh",
          boxSizing: "border-box",
          maxHeight: "60vh",
        }}
      >
        {selectedImage ? (
          <>
            <div>
              <img
                src={selectedImage}
                alt="image"
                style={{ width: "100%", maxHeight: "60vh" }}
              />
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: "5vw" }}>
              <PhotoTwoToneIcon style={{ fontSize: "5vw" }} color="disabled" />
            </div>
            <div>No data for preview</div>
          </>
        )}
      </div>
    </>
  );
}

export default GallarySlide;
