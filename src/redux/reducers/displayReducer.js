const displayReducer = (state = "all", action) => {
  switch (action.type) {
    case "CHANGE-DISPLAY":
      return action.status;
    default:
      return state;
  }
};

export default displayReducer;
