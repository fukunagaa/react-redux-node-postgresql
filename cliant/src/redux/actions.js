import { ADD_TODO, DROP_TODO, TOGGLE_FAVORITE } from "./actionTypes";

let todoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
    id: ++todoId,
  },
});

export const dropTodo = (event, status) => ({
  type: DROP_TODO,
  payload: {
    event,
    status,
  },
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: {
    id,
  },
});
