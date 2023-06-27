// eslint-disable-next-line react/prop-types
function BoxCard({ children, data, setSelectedImage }) {
  console.log("BoxCard>>", { data });
  return (
    <div
      style={{
        overflow: "hidden",
        width: "7vw",
        height: "12vh",
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
          <img src={data} style={{ width: "7vw", height: "12vh" }} />
        </div>
      )}
    </div>
  );
}

export default BoxCard;
