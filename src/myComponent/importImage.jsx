/* eslint-disable react/prop-types */
import AddAPhotoTwoToneIcon from "@mui/icons-material/AddAPhotoTwoTone";
// import SlideshowGallery from "./slideShow";
function ImportImage({ handleClick = () => {}, type = "single", data = [] }) {
  const handleImportClick = () => {
    const input = document.getElementById("import-image");
    input.click();
  };
  return (
    <>
      {/* <SlideshowGallery uploadedImages={Array.isArray(data) ? data : [data]} /> */}
      {type === "icon" ? (
        <>
          {[data]?.map((item, index) => (
            <div
              key={index}
              // onClick={() => handleImportClick()}
              style={{
                backgroundColor: "lightgrey",
                width: "6rem",
                height: "5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1rem",
                opacity: 0.8,
                border: "2px dotted black",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(238, 238, 238)",
                  padding: "1rem",
                  borderRadius: "10rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={item} />
                <AddAPhotoTwoToneIcon color="disabled" />
              </div>
            </div>
          ))}
          <div
            onClick={() => handleImportClick()}
            style={{
              backgroundColor: "lightgrey",
              width: "6rem",
              height: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              opacity: 0.8,
              border: "2px dotted black",
            }}
          >
            <div
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
          </div>
        </>
      ) : (
        <button type="button" onClick={handleImportClick}>
          Import
        </button>
      )}
      <input
        id="import-image"
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handleClick(e)}
        {...(type !== "single" ? { multiple: true } : {})}
      />
    </>
  );
}

export default ImportImage;
