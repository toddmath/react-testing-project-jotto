import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
import App from "./App";

const setup = (initialState = {}) => {
  return shallow(
    <App store={storeFactory(initialState)} />,
    initialState
  ).dive();
};

test("renders learn react link", () => {});

describe("App component", () => {
  describe("redux props", () => {
    test("has access to `success` state", () => {
      const success = true;
      const wrapper = setup({ success });
      const successProp = wrapper.props().success;
      // console.log(wrapper.debug());
      expect(successProp).toBe(success);
    });

    test("has access to `secretWord` state", () => {
      const secretWord = "party";
      const wrapper = setup({ secretWord });
      const secretWordProp = wrapper.props().secretWord;
      expect(secretWordProp).toBe(secretWord);
    });

    test("has access to `guessedWords` state", () => {
      const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
      const wrapper = setup({ guessedWords });
      const guessedWordsProp = wrapper.props().guessedWords;
      expect(guessedWordsProp).toEqual(guessedWords);
    });

    test("`getSecretWord` action creator is a function on the props", () => {
      const wrapper = setup();
      // console.log(wrapper.debug());
      const getSecretWordProp = wrapper.props().getSecretWord;
      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
  });
});

// describe("UnConnectedApp", () => {
//   test("`getSecretWord` runs on App mount", () => {
//     const getSecretWordMock = jest.fn();
//     const props = {
//       getSecretWord: getSecretWordMock,
//       success: false,
//       guessedWords: []
//     };
//     const wrapper = shallow(<UnConnectedApp {...props} />);
//     console.log(wrapper.debug());
//     // wrapper.
//   });
// });
