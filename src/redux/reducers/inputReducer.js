const inputReducer = (state = "", action) => {
  switch (action.type) {
    case "CHENGE-INPUT":
      return action.text;
    default:
      return state;
  }
};

export default inputReducer;
