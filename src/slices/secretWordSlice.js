import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const secretWordSlice = createSlice({
  name: "secretWord",
  initialState: null,
  reducers: {
    secretWord: (state, action) => state,
    setSecretWord: (state, action) => (state = String(action.payload))
  }
});

export const { secretWord, setSecretWord } = secretWordSlice.actions;
export default secretWordSlice.reducer;

export const getSecretWord = () => async dispatch => {
  const response = await axios.get("http://localhost:3030");
  dispatch(setSecretWord(response.data));
  // return response;
};

// export const getSecretWord = () => {
//   return dispatch =>
//     axios.get("http://localhost:3030").then(response => {
//       dispatch({ type: setSecretWord.type, payload: response.data });
//     });
// };
