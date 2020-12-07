import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iStore } from "../redux/reducers";
import todoSlice, { iTask } from "../redux/reducers/todoReducer";

const prepareLsit = (list: Array<iTask>, display: string, search: string) => {
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
  const display = useSelector((state: iStore) => state.display);
  const search = useSelector((state: iStore) => state.filter);
  const list = prepareLsit(
    useSelector((state: iStore) => state.todo),
    display,
    search
  );

  const dispatch = useDispatch();

  const onChange = (id: number) => {
    dispatch(todoSlice.actions.CHANGE_TODO(id));
  };

  const onClick = (id: number) => {
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
