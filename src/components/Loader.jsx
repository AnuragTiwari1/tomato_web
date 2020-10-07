import React from "react";

export const Loader = (props) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <p style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
        Loading...
      </p>
      {props.msg && <p style={{ color: "white" }}>{props.msg}</p>}
    </div>
  );
};
