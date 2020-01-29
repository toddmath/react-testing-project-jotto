import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { secretWord } from "../slices/secretWordSlice";

/**
 * Custom hook that utilizes `useDispatch` and `useCallback` hooks to dispatch
 * secretWord action creator.
 * @returns secretWord
 */
export function useSecretWord() {
  const dispatch = useDispatch();
  const word = useCallback(() => dispatch(secretWord()), [dispatch]);
  return word;
}
