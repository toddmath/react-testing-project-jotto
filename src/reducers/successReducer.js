// import { actionTypes } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

import { correctGuess } from "../actions/index";

/**
 * @function successReducer
 * @param {array} state Array of guessed words.
 * @param {object} action action to be reduced.
 * @returns {boolean} new success state.
 */
// export const successReducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.CORRECT_GUESS:
//       return true;
//     default:
//       return false;
//   }
// };

// const successReducer = (state, action) => {
//   switch (action.type) {
//     case correctGuess.type:
//       return true;
//     default:
//       return false;
//   }
// };

const successReducer = createReducer(false, {
  [correctGuess]: state => true
});

export default successReducer;
