import { createSlice } from "@reduxjs/toolkit";

const secretWordSlice = createSlice({
  name: "secretWord",
  initialState: "",
  reducers: {
    secretWord: (state, action) => state
  }
});

export const { secretWord } = secretWordSlice.actions;
export default secretWordSlice.reducer;
