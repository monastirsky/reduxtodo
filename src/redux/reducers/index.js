import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";
import inputReducer from "./inputReducer";

const allReduser = combineReducers({
  display: displayReducer,
  filter: filterReducer,
  todo: todoReducer,
  input: inputReducer,
});

export default allReduser;
