import React from "react";

export default function NavBar() {
  return (
    <div
      style={{ height: "50px", backgroundColor: "purple", paddingTop: "10px" }}
    >
      <div
        style={{
          marginLeft: "50px",
          color: "white",
          fontSize: "30px",
          fontWeight: "Bold"
        }}
      >
        {" "}
        Twitch Game Search{" "}
      </div>
    </div>
  );
}
