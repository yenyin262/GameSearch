import React from "react";
import SearchBar from "./SearchBar";
import twitchgame from "../apis/twitchgame";
import ResultBox from "./ResultBox";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesResult: []
    };
  }

  setGamesResult = games => {
    if (games) {
      this.setState({ gamesResult: games.slice(0, 4) });
    }
  };

  onSearchSubmit = searchGames => {
    twitchgame("search/games", {
      params: {
        query: searchGames
      }
    }).then(response => this.setGamesResult(response.data.games));
  };

  render() {
    return (
      <>
        <NavBar />
        <div
          // className="ui container"
          style={{
            display: "flex",
            flexDirection: "row",
            // marginRight: "0px",
            // width: "723px",
            marginLeft: "50px"
          }}
        >
          <div style={{ width: "70%" }}>
            <p style={{ marginTop: "20px", fontSize: "20px", width: "74%" }}>
              Search for your favorite games in the search box below. Click on
              their name to find out more information about them.
            </p>
            <SearchBar onFormSubmit={this.onSearchSubmit} />
            {this.state.gamesResult[0] && (
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
            <ResultBox gamesResult={this.state.gamesResult} />
          </div>
          <div style={{ width: "30%" }}>
            {this.state.gamesResult[0] && (
              <SideBar game={this.state.gamesResult[0]} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
