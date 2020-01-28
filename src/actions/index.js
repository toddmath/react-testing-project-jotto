import { createAction } from "@reduxjs/toolkit";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS"
};

// export function correctGuess() {
//   return { type: actionTypes.CORRECT_GUESS };
// }

export const correctGuess = createAction("CORRECT_GUESS");

// export default correctGuess;
