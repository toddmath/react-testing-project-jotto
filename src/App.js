import React from "react";
import { connect } from "react-redux";
// import { createSelector } from "reselect";

import { Container } from "reactstrap";
import { Congrats, GuessedWords, Input } from "./components";
import { getSecretWord } from "./slices/secretWordSlice";
// import guessedWords from "./slices/guessedWordsSlice";

import "./App.css";

const App = () => {
  return (
    <Container className="themed-container">
      <h1 className="display-3">Jotto</h1>
      <Congrats data-test="congrats-component" success={true} />
      <Input />
      <GuessedWords
        data-test="guessed-component"
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  const { guessedWords, secretWord, success } = state;
  return { guessedWords, secretWord, success };
};

// const mapStateToProps = state => ({
//   guessedWords: state => selectGuessedWords(state),
//   secretWord: state => selectSecretWord(state)
// });

export default connect(mapStateToProps, { getSecretWord })(App);
