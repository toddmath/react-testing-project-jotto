import { actionTypes, correctGuess } from "./";

describe("correctGuess action creator", () => {
  test("returns an action with type `CORRECT GUESS`", () => {
    const action = correctGuess();

    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
