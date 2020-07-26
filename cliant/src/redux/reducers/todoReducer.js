import {
  ADD_TODO_PENDING,
  ADD_TODO_FULFILLED,
  ADD_TODO_REJECTED,
  DROP_TODO_PENDING,
  DROP_TODO_FULFILLED,
  DROP_TODO_REJECTED,
  TOGGLE_FAVORITE,
  TOGGLE_FAVORITE_PENDING,
  TOGGLE_FAVORITE_FULFILLED,
  TOGGLE_FAVORITE_REJECTED,
} from "../actionTypes";

import { todoInitialState } from "../initialState";
import { STATUS_TODO, FAVORITE_NO } from "../../utils/constants";
import { getLocalTodoList } from "../todoCreator";

export default function (state = todoInitialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO_FULFILLED:
    case DROP_TODO_FULFILLED:
    case TOGGLE_FAVORITE_FULFILLED: {
      const { data } = action.payload;
      const { byIds, allIds } = getLocalTodoList(data);
      return {
        allIds,
        byIds,
      };
    }
    default:
      return state;
  }
}
