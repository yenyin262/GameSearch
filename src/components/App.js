import React from "react";
import SearchBar from "./SearchBar";
import twitchgame from "../apis/twitchgame";
import ResultBox from "./ResultBox";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesResult: [],
      gameInfo: undefined
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
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginLeft: "50px"
          }}
        >
          <div>
            <p style={{ marginTop: "20px", fontSize: "20px", width: "60%" }}>
              Search for your favorite games in the search box below. Click on
              their name to find out more information about them.
            </p>
            <SearchBar
              onFormSubmit={this.onSearchSubmit}
              gamesResult={this.state.gamesResult}
            />
            {/* {this.state.gamesResult[0] && (
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
            )} */}
          </div>

          <ResultBox gamesResult={this.state.gamesResult} />
        </div>
      </>
    );
  }
}

export default App;
