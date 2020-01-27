import React, { Component } from "react";
import { Congrats, GuessedWords } from "./components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats data-test="congrats-component" success={true} />
        <GuessedWords
          data-test="guessed-component"
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
