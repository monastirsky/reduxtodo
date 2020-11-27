import { ADD_TODO, CHANGE_TODO, DELETE_TODO } from "../types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.task];
    case DELETE_TODO:
      return state.filter((element) => element.id !== action.id);
    case CHANGE_TODO:
      return state.map((element) => {
        if (element.id === action.id) {
          element.status = !element.status;
        }
        return element;
      });
    default:
      return state;
  }
};
export default todoReducer;
