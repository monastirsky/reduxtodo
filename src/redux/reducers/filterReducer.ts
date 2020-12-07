import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    CHANGE_FILTER: (state, action) => action.payload,
  },
});

export default filterSlice;
