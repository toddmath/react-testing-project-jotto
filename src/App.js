import React, { Component } from "react";

import { Container } from "reactstrap";
import { Congrats, GuessedWords } from "./components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Container className="themed-container">
        <div>
          <h1 className="display-3">Jotto</h1>
          <Congrats data-test="congrats-component" success={true} />
          <GuessedWords
            data-test="guessed-component"
            guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
          />
        </div>
      </Container>
    );
  }
}

export default App;
