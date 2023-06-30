import React from "react";

function BoxCard({
  children,
  data,
  setSelectedImage,
}: {
  children?: any;
  data?: any;
  setSelectedImage?: any;
}): React.JSX.Element {
  console.log("BoxCard>>", { data });
  return (
    <div
      style={{
        overflow: "hidden",
        minWidth: "80px",
        width: "7vw",
        height: "12vh",
        minHeight: "70px",
        borderRadius: "15%",
        backgroundColor: "lightgrey",
        display: "flex",
        alignItems: "center",
        marginLeft: "2px",
        justifyContent: "center",
        opacity: 0.8,
      }}
    >
      {children ? (
        children
      ) : (
        <div onClick={() => setSelectedImage(data)}>
          <img src={data.src} style={{ width: "7vw", height: "12vh" }} />
        </div>
      )}
    </div>
  );
}

export default BoxCard;
