import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    ADD_TODO: (state, action) => {
      const id = Math.random();
      const task = { text: action.payload, status: false, id };
      state.push(task);
    },
    DELETE_TODO: (state, action) =>
      state.filter((element) => element.id !== action.payload),
    CHANGE_TODO: (state, action) => {
      state = state.map((element) => {
        if (element.id === action.payload) {
          element.status = !element.status;
        }
        return element;
      });
    },
  },
});
export default todoSlice;
