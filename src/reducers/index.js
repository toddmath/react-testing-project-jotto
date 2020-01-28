import { combineReducers } from "redux";

// import successReducer from "./successReducer";
import successReducer from '../slices/successSlice';

export default combineReducers({
  success: successReducer
});
