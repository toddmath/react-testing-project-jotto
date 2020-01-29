import { createSlice } from "@reduxjs/toolkit";
import { getLetterMatchCount } from "../helpers";
import { correctGuess } from "./successSlice";

const guessedWordsSlice = createSlice({
  name: "guessedWords",
  initialState: [],
  reducers: {
    guessWord: (state, action) => {
      const { guessedWord, letterMatchCount } = action.payload;
      state.push({ guessedWord, letterMatchCount });
    }
  }
});

export const { guessWord } = guessedWordsSlice.actions;
export default guessedWordsSlice.reducer;

// export const fetchWord = guessedWord => async dispatch => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };

export const handleGuessWord = guessedWord => (dispatch, getState) => {
  try {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch(guessWord({ guessedWord, letterMatchCount }));

    if (guessedWord === secretWord) {
      dispatch(correctGuess());
    }
  } catch (error) {
    console.log(error.message);
  }
};
