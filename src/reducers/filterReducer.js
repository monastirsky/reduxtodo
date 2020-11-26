const filterReduser = (state = "", action) => {
  switch (action.type) {
    case "CHENGE-FILTER":
      return action.text;
    default:
      return state;
  }
};

export default filterReduser;
