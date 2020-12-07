import { combineReducers } from "redux";
import displaySlice from "./displayReducer";
import filterSlice from "./filterReducer";
import inputSlice from "./inputReducer";
import todoSlice, { iTask } from "./todoReducer";

export interface iStore {
  display: string;
  filter: string;
  todo: Array<iTask>;
  input: string;
}

const allReduser = combineReducers({
  display: displaySlice.reducer,
  filter: filterSlice.reducer,
  todo: todoSlice.reducer,
  input: inputSlice.reducer,
});

export default allReduser;
