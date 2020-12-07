import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputSlice from "../redux/reducers/inputReducer";
import todoSlice from "../redux/reducers/todoReducer";

export default function Input() {
  let inputText = useSelector((state) => state.input);

  const dispatch = useDispatch();

  const onChange = (event) => {
    const inputText = event.target.value;
    dispatch(inputSlice.actions.CHANGE_INPUT(inputText));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(todoSlice.actions.ADD_TODO(inputText));
    dispatch(inputSlice.actions.CHANGE_INPUT(""));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={inputText} />
    </form>
  );
}
