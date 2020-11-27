import { CHANGE_DISPLAY } from "../types";

const displayReducer = (state = "all", action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return action.status;
    default:
      return state;
  }
};

export default displayReducer;
