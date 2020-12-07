import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todoSlice from "../redux/reducers/todoReducer";

const prepareLsit = (list, display, search) => {
  if (display === "all") {
    return list.filter((element) => element.text.includes(search));
  } else if (display === "checked") {
    return list
      .filter((element) => element.status)
      .filter((element) => element.text.includes(search));
  } else {
    return list
      .filter((element) => !element.status)
      .filter((element) => element.text.includes(search));
  }
};

export default function List() {
  const display = useSelector((state) => state.display);
  const search = useSelector((state) => state.filter);
  const list = prepareLsit(
    useSelector((state) => state.todo),
    display,
    search
  );

  const dispatch = useDispatch();

  const onChange = (id) => {
    dispatch(todoSlice.actions.CHANGE_TODO(id));
  };

  const onClick = (id) => {
    dispatch(todoSlice.actions.DELETE_TODO(id));
  };

  return list.length ? (
    <div className="collection">
      {list.map((element) => {
        return (
          <div className={"collection-item"} key={element.id}>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                onChange={() => onChange(element.id)}
                checked={element.status}
              />
              <span className={"black-text" + (element.status ? " done" : "")}>
                {element.text}{" "}
              </span>
            </label>

            <button
              className="right"
              onClick={() => {
                onClick(element.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="center">No tasks</p>
  );
}
