// import { actionTypes } from "../actions";
import { correctGuess } from "../actions";
// import { correctGuess } from "../slices/successSlice";
import successReducer from "./successReducer";

describe("successReducer", () => {
  test("returns default initial state of `false` when no action passed", () => {
    const newState = successReducer(undefined, {});

    expect(newState).toBe(false);
  });

  test("returns state of true upon recieving an action of type `CORRECT_GUESS`", () => {
    const newState = successReducer(undefined, correctGuess());

    expect(newState).toBe(true);
  });
});
