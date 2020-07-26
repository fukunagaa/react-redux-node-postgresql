import {
  ADD_TODO,
  DROP_TODO,
  TOGGLE_FAVORITE,
  CHANGE_CONTENT_FLAG,
  FETCH_UPDATE_CONTENT,
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
  type: FETCH_UPDATE_CONTENT,
  payload: axios.post("/updateContent", params),
});

export const updateChangeFlag = (id, changingFlag) => ({
  type: CHANGE_CONTENT_FLAG,
  payload: {
    id,
    changingFlag,
  },
});
