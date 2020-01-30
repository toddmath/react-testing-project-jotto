import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { createSelector } from "reselect";

import { Container } from "reactstrap";
import { Congrats, GuessedWords, Input } from "./components";
import { getSecretWord } from "./slices/secretWordSlice";

import "./App.css";

const App = ({ guessedWords, secretWord, success, getSecretWord }) => {
  useEffect(() => {
    if (secretWord === null || secretWord.length < 1) {
      getSecretWord();
    }
  }, [secretWord, getSecretWord]);

  return (
    <Container className="themed-container">
      <h1 className="display-3">Jotto</h1>
      <Congrats data-test="congrats-component" success={success} />
      <Input />
      <GuessedWords data-test="guessed-component" guessedWords={guessedWords} />
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
