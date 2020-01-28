import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";
import success from './slices/successSlice'
import guessedWords from './slices/guessedWordsSlice';

const store = configureStore({
  reducer: {
    success,
    guessedWords
  }
});

export default store;
