import { ADD_TODO, DROP_TODO, TOGGLE_FAVORITE } from "./actionTypes";
import axios from "axios";

export const addTodo = (params) => ({
  type: ADD_TODO,
  payload: axios.post("/addTodo", params),
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
