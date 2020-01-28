/* eslint-disable react/forbid-foreign-prop-types */
import React from "react";
import checkPropTypes from "check-prop-types";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { mergeDeepRight } from "ramda";
// import { mount } from "enzyme";

import rootReducer from "../src/reducers";

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

/**
 * Creates a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer.
 * @param {object} initialState Initial state for store.
 * @function storeFactory
 * @returns {Store} Redux store.
 */
export const storeFactory = (state = {}) =>
  configureStore({ reducer: rootReducer, preloadedState: state });

export const makeStore = (customState = {}) => {
  const root = rootReducer({}, { type: "@@INIT" });
  const state = mergeDeepRight(root, customState);

  // return configureStore(rootReducer, state);
  return storeFactory(state);
};

export const reduxify = (Component, props = {}, state = {}) => {
  return function reduxWrap() {
    return (
      <Provider store={makeStore(state)}>
        <Component {...props} />
      </Provider>
    );
  };
};

// export const makeMountRender = (Component, defaultProps = {}) => {
//   return (customProps = {}) => {
//     const props = {
//       ...defaultProps,
//       ...customProps
//     };
//     return mount(<Component {...props} />);
//   };
// };

export const snapshotify = reactWrapper => reactWrapper.html();
