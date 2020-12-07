import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    CHANGE_INPUT: (state, action) => action.payload,
  },
});

export default inputSlice;
