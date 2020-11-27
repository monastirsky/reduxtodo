// types.js
// export const CHANGE_INPUT = 'CHANGE-INPUT'

import {
  CHANGE_INPUT,
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  CHANGE_DISPLAY,
  CHANGE_FILTER,
} from "../types";

export const addTodo = (value) => {
  const id = Math.random();
  return {
    type: ADD_TODO,
    task: { text: value, status: false, id },
  };
};

export const chengeInput = (text) => {
  return {
    type: CHANGE_INPUT,
    text,
  };
};

export const chengeStatus = (id) => {
  return {
    type: CHANGE_TODO,
    id,
  };
};

export const deletElement = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const chengeDisplay = (status) => {
  return {
    type: CHANGE_DISPLAY,
    status,
  };
};

export const chengeFilter = (text) => {
  return {
    type: CHANGE_FILTER,
    text,
  };
};
