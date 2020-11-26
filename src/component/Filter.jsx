import React from "react";
import { useDispatch } from "react-redux";
import { chengeFilter } from "../redux/actions/index";

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = (event) => {
    const newFilter = event.target.value;
    dispatch(chengeFilter(newFilter));
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
}
