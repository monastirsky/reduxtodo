import { combineReducers } from "redux";
import displaySlice from "./displayReducer";
import filterSlice from "./filterReducer";
import inputSlice from "./inputReducer";
import todoSlice from "./todoReducer";

const allReduser = combineReducers({
  display: displaySlice.reducer,
  filter: filterSlice.reducer,
  todo: todoSlice.reducer,
  input: inputSlice.reducer,
});

export default allReduser;
