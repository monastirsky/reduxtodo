import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: "all",
  reducers: {
    CHANGE_DISPLAY: (state, action) => (state = action.payload),
  },
});

export default displaySlice;
