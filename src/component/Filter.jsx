import React from "react";
import { useDispatch } from "react-redux";
import filterSlice from "../redux/reducers/filterReducer";

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = (event) => {
    const newFilter = event.target.value;
    dispatch(filterSlice.actions.CHANGE_FILTER(newFilter));
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
}
