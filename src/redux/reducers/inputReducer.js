import { CHANGE_INPUT } from "../types";

const inputReducer = (state = "", action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.text;
    default:
      return state;
  }
};

export default inputReducer;
