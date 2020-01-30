import moxios from "moxios";

import { getSecretWord } from "./secretWordSlice";
import { storeFactory } from "../../test/testUtils";

describe("getSecretWord async action creator and secretWordSlice", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response word to state", async () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          secretWord
        }
      });
    });

    // store.dispatch(getSecretWord());
    // const newState = store.getState();
    // console.log(newState.secretWord, secretWord);
    // expect(newState.secretWord).toBe(secretWord);

    await store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();

      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
