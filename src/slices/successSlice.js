import { createSlice } from "@reduxjs/toolkit";

const successSlice = createSlice({
  name: "success",
  initialState: false,
  reducers: {
    correctGuess: state => true
  }
});

export const { correctGuess } = successSlice.actions;
export default successSlice.reducer;
