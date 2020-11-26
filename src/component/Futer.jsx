import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { chengeDisplay } from "../actions/index";

export default function Futer() {
  const status = useSelector((state) => state.display);
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const chengeShow = (event) => {
    const newDisplayStatus = event.target.value;
    dispatch(chengeDisplay(newDisplayStatus));
  };
  return list.length ? (
    <div>
      <div>
        <p>Task left: {list.filter((element) => !element.status).length}</p>
      </div>
      <div className="center">
        <label>
          <input
            type="radio"
            name="show-status"
            value="all"
            onChange={chengeShow}
            checked={status === "all" && true}
          />
          <span className="">All</span>
        </label>
        <label>
          <input
            type="radio"
            name="show-status"
            value="checked"
            onChange={chengeShow}
            checked={status === "checked" && true}
          />
          <span className="">Checked</span>
        </label>
        <label>
          <input
            type="radio"
            name="show-status"
            value="unchecked"
            onChange={chengeShow}
            checked={status === "unchecked" && true}
          />
          <span className="">Unchecked</span>
        </label>
      </div>
    </div>
  ) : (
    ""
  );
}
