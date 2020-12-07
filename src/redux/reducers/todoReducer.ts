import { createSlice } from "@reduxjs/toolkit";

export interface iTask {
  id: number;
  text: string;
  status: boolean;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: [] as Array<iTask>,
  reducers: {
    ADD_TODO: (state, action) => {
      const id = Math.random();
      const task: iTask = { text: action.payload, status: false, id };
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
