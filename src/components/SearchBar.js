import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchGames: ""
    };
  }

  onSearchInput = event => {
    this.setState({ searchGames: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchGames);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <div
            className="field"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <label
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                paddingBottom: "20px"
              }}
            >
              Search:
            </label>
            <input
              type="text"
              value={this.state.searchGames}
              onChange={this.onSearchInput}
              style={{ height: "30px", padding: "5px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
