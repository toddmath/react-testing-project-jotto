import { createSlice } from '@reduxjs/toolkit';

const guessedWordsSlice = createSlice({
  name: "guessedWord",
  initialState: false,
  reducers: {
    correctGuess: state => true,
    guessedWords: (state, action) => {
      return null
    }
  }
});

export const { correctGuess, guessedWords } = guessedWordsSlice.actions;
export default guessedWordsSlice.reducer;

export const fetchWord = guessedWord => async dispatch => {
  try {

  } catch (error) {
    console.log(error);
  }
};