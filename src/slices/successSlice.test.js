import successReducer, { correctGuess } from "./successSlice";

describe("successSlice", () => {
  test("returns default initial state of `false` when no action passed", () => {
    const newState = successReducer(undefined, {});

    expect(newState).toBe(false);
  });

  test("returns state of true upon recieving an action of type `CORRECT_GUESS`", () => {
    const newState = successReducer(undefined, correctGuess());

    expect(newState).toBe(true);
  });
});
