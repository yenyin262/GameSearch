import React from "react";
import SearchBar from "./SearchBar";
import twitchgame from "../apis/twitchgame";
import ResultBox from "./ResultBox";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

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
            display: "flex",
            paddingLeft: "50px"
          }}
        >
          <div style={{ flex: "1 1 auto" }}>
            <p style={{ marginTop: "20px", fontSize: "20px", width: "76%" }}>
              Search for your favorite games in the search box below. Click on
              their name to find out more information about them.
            </p>
            <div style={{ width: "25%", margin: " 0 auto" }}>
              <SearchBar
                onFormSubmit={this.onSearchSubmit}
                gamesResult={this.state.gamesResult}
              />

              <ResultBox
                gamesResult={this.state.gamesResult}
                onClick={game => this.setState({ gameInfo: game })}
              />
            </div>
          </div>
          {this.state.gameInfo !== undefined ? (
            <SideBar game={this.state.gameInfo} />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
