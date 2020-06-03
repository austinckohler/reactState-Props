import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./components/charactercontainer";
import NavBar from "./components/navbar";

const rmURL = "https:rickandmortyapi.com/api/character";

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    fetch(rmURL)
      .then((response) => response.json())
      .then((data) => this.setState({ characters: data.results }));
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className="App">
          <CharacterContainer
            characters={this.state.characters}
            key={this.state.id}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
