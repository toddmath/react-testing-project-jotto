import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => (
  <div data-test="component-guessed-words">
    {guessedWords.length === 0 ? (
      <span data-test="guessed-instructions">
        Try to guess the secret word!
      </span>
    ) : (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
            <tbody>
              {guessedWords.map(({ guessedWord, letterMatchCount }, index) => (
                <tr data-test="guessed-word" key={index}>
                  <td>{guessedWord}</td>
                  <td>{letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
      </div>
    )}
  </div>
);

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
