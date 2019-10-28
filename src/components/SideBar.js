import React from "react";

export default function SideBar({ game }) {
  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        height: "100vh",
        marginLeft: "50px",
        paddingLeft: "30px",
        paddingTop: " 10px",
        overflowY: "scroll"
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
        {game.name}
      </p>
      <img
        src={game.box.medium}
        alt={game.name}
        style={{ marginLeft: "100px" }}
      />
      <p style={{ marginTop: "16px", textAlign: "center", fontWeight: "bold" }}>
        {game.popularity} viewers{" "}
      </p>
    </div>
  );
}
