import React from "react";

export default function SideBar({ game }) {
  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        padding: "15px",
        height: "100vh",
        flex: "0 0 20%"
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "20px", textAlign: "center" }}>
        {game.name}
      </p>
      <img
        src={game.box.medium}
        alt={game.name}
        style={{ margin: "0 auto", display: "block" }}
      />
      <p style={{ marginTop: "16px", textAlign: "center", fontWeight: "bold" }}>
        {game.popularity} viewers{" "}
      </p>
    </div>
  );
}
