import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../test/testUtils";

import Input from "./Input";

/**
 * Factory function to create a ShallowWrapper for the `Input` component.
 * @function setup
 * @param {object} initialState Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  return shallow(<Input store={storeFactory(initialState)} />, initialState)
    .dive()
    .dive();
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    afterEach(() => {
      wrapper.update();
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });

    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    afterEach(() => {
      wrapper.update();
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });

    test("does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });

    test("does not render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

// TODO: add updates state test to Input.test.js
describe("updates state", () => {});
