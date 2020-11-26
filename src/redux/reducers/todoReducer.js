const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDNEW":
      return [...state, action.task];
    case "DELETE":
      return state.filter((element) => element.id !== action.id);
    case "CHANGE":
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
