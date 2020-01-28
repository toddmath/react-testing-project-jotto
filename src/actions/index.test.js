import { correctGuess } from "./";

describe("correctGuess action creator", () => {
  test("returns an action with type `CORRECT GUESS`", () => {
    const action = correctGuess();

    expect(action).toEqual({ type: "CORRECT_GUESS" });
  });
});
