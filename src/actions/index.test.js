import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "../slices/secretWordSlice";
// import { secretWord } from '../slices/secretWordSlice'

describe("getSecretWord action creator", () => {
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
        response: secretWord
      });
    });

    // store.dispatch(getSecretWord());
    // const newState = store.getState();
    // console.log(newState.secretWord, secretWord);
    // expect(newState.secretWord).toBe(secretWord);

    store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();

      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
