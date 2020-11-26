import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, chengeInput } from "../actions/index";

export default function Input() {
  let inputText = useSelector((state) => state.input);

  const dispatch = useDispatch();

  const onChange = (event) => {
    const inputText = event.target.value;
    dispatch(chengeInput(inputText));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputText));
    dispatch(chengeInput(""));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={inputText} />
    </form>
  );
}
