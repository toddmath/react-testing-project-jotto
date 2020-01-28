// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

// export default createStore(
//   rootReducer,
//   /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: rootReducer
});

export default store;
