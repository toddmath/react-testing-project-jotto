import { shallowEqual, useSelector } from "react-redux";

/**
 * Appends `shallowEqual` to `use-selector`, both from react-redux
 * @param {*} selector - Redux selector
 * @returns {Function} useSelector(selector)
 */
export function useShallowEqualSelector(selector) {
  return useSelector(selector, shallowEqual);
}
