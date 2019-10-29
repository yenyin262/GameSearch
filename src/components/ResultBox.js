import React from "react";
import SideBar from "./SideBar";

export default class ResultBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameInfo: undefined
    };
  }

  render() {
    const { gamesResult } = this.props;
    const { gameInfo } = this.state;
    return (
      <React.Fragment>
        <div>
          <div>
            {this.props.gamesResult[0] && (
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginLeft: "29%"
                }}
              >
                Games:
              </p>
            )}
            {gamesResult.map(game => (
              <li
                onClick={() => this.setState({ gameInfo: game })}
                key={game._id}
                style={{
                  border: "1px  solid black ",
                  width: "25%",
                  marginLeft: "29%",
                  padding: "5px",
                  marginTop: "15px",
                  listStyle: "none"
                }}
              >
                {game.name}
              </li>
            ))}
          </div>
          <div>
            <div>
              {gameInfo !== undefined ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <SideBar game={gameInfo} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
