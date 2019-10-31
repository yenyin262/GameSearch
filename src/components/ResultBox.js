import React from "react";

export default class ResultBox extends React.Component {
  render() {
    const { gamesResult } = this.props;

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div style={{ flex: "1 1 auto" }}>
          <div>
            {this.props.gamesResult[0] && (
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px"
                }}
              >
                Games:
              </p>
            )}
            <ul style={{ padding: "0px" }}>
              {gamesResult.map(game => (
                <li
                  onClick={() => this.props.onClick(game)}
                  key={game._id}
                  style={{
                    border: "1px  solid black ",
                    padding: "5px",
                    marginTop: "15px",
                    listStyle: "none"
                  }}
                >
                  {game.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
