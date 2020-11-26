export const addTodo = (value) => {
  const id = Math.random();
  return {
    type: "ADDNEW",
    task: { text: value, status: false, id },
  };
};

export const chengeInput = (text) => {
  return {
    type: "CHENGE-INPUT",
    text,
  };
};

export const chengeStatus = (id) => {
  return {
    type: "CHANGE",
    id,
  };
};

export const deletElement = (id) => {
  return {
    type: "DELETE",
    id,
  };
};