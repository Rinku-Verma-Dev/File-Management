/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SlideshowGallery.css";
import React from "react";

const SlideshowGallery = ({ uploadedImages }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(uploadedImages.length - 1);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex < uploadedImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  return (
    <div className="container">
      <div className="mySlides">
        <a className="prev" onClick={prevImage}>
          ❮
        </a>
        <div className="numbertext">
          {selectedImageIndex + 1} / {uploadedImages.length}
        </div>
        <img
          src={uploadedImages[selectedImageIndex]}
          style={{ height: "400px" }}
        />
        <a className="next" onClick={nextImage}>
          ❯
        </a>
      </div>

      <div className="row">
        {uploadedImages.length
          ? uploadedImages.map((item, i) => (
              <div className="column" key={i}>
                <img
                  className="demo cursor"
                  src={item}
                  style={{ width: "100%", height: "100px" }}
                  onClick={() => {
                    setSelectedImageIndex(i);
                  }}
                  alt="The Woods"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SlideshowGallery;
