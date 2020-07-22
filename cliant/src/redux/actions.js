import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let todoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
    id: ++todoId,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
