import { CHANGE_FILTER } from "../types";

const filterReduser = (state = "", action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.text;
    default:
      return state;
  }
};

export default filterReduser;
