import { createAction } from "@reduxjs/toolkit";
// import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS"
};

// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }

export const correctGuess = createAction("CORRECT_GUESS");
export const guessWord = createAction("GUESS_WORD");
// export default correctGuess;

// export const guessWord = guessedWord => {
//   return function(dispatch, getState) {
//     const secretWord = getState().secretWord;
//     const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

//     dispatch({
//       type:
//     })
//   };
// };
