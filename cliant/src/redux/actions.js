import {
  ADD_TODO,
  DROP_TODO,
  TOGGLE_FAVORITE,
  CHANGE_CONTEXT_FLAG,
  FETCH_UPDATE_CONTEXT,
} from "./actionTypes";
import axios from "axios";

export const addTodo = (params) => ({
  type: ADD_TODO,
  payload: axios.post("/addTodo", params),
});

export const dropTodo = (params) => ({
  type: DROP_TODO,
  payload: axios.post("/updateStatus", params),
});

export const toggleFavorite = (params) => ({
  type: TOGGLE_FAVORITE,
  payload: axios.post("/updateFavorite", params),
});

export const updateContent = (params) => ({
  type: FETCH_UPDATE_CONTEXT,
  payload: axios.post("/updateContent", params),
});

export const updateChangeFlag = (id, changingFlag) => ({
  type: CHANGE_CONTEXT_FLAG,
  payload: {
    id,
    changingFlag,
  },
});
