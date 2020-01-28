import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";
import success from "./slices/successSlice";
import guessedWords from "./slices/guessedWordsSlice";
import secretWord from "./slices/secretWordSlice";

export const rootReducer = {
  success,
  guessedWords,
  secretWord
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
