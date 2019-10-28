import React from "react";

export default function ResultBox({ gamesResult }) {
  return (
    <div>
      {gamesResult.map(game => (
        <p
          key={game._id}
          style={{
            border: "1px  solid black ",
            width: "25%",
            marginLeft: "29%",
            padding: "5px"
          }}
        >
          {game.name}
        </p>
      ))}
    </div>
  );
}
