/* eslint-disable react/prop-types */
import { useCallback } from "react";
import AddAPhotoTwoToneIcon from "@mui/icons-material/AddAPhotoTwoTone";
import BoxCard from "./boxCard";

function ImportImage({
  handleClick = () => {},
  type = "single",
  data = [],
  setSelectedImage,
}) {
  const handleImportClick = useCallback(() => {
    const input = document.getElementById("import-image");
    input.click();
  }, []);

  return (
    <div style={{ height: "40vh", boxSizing: "border-box" }}>
      <div style={{ display: "flex" }}>
        {data.map((item, i) => (
          <BoxCard data={item} key={i} setSelectedImage={setSelectedImage}/>
        ))}
        {type === "icon" ? (
          <BoxCard>
            <div
              onClick={handleImportClick}
              style={{
                backgroundColor: "rgb(238, 238, 238)",
                padding: "1rem",
                borderRadius: "10rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddAPhotoTwoToneIcon color="disabled" />
            </div>
          </BoxCard>
        ) : (
          <button type="button" onClick={handleImportClick}>
            Import
          </button>
        )}
      </div>
      <input
        id="import-image"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handleClick(e)}
        {...(type !== "single" ? { multiple: true } : {})}
      />
    </div>
  );
}

export default ImportImage;
