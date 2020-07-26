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
  CHANGE_CONTEXT_FLAG,
  FETCH_UPDATE_CONTEXT_PENDING,
  FETCH_UPDATE_CONTEXT_FULFILLED,
  FETCH_UPDATE_CONTEXT_REJECTED,
} from "../actionTypes";

import { todoInitialState } from "../initialState";
import { STATUS_TODO, FAVORITE_NO } from "../../utils/constants";
import { getLocalTodoList } from "../todoCreator";

export default function (state = todoInitialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO_PENDING:
    case DROP_TODO_PENDING:
    case TOGGLE_FAVORITE_PENDING:
    case FETCH_UPDATE_CONTEXT_PENDING:
      console.log("PEDDING NOW");
      return {
        ...state,
        fetchStatus: {
          fetching: true,
          fetched: false,
        },
      };
    case ADD_TODO_FULFILLED:
    case DROP_TODO_FULFILLED:
    case TOGGLE_FAVORITE_FULFILLED:
    case FETCH_UPDATE_CONTEXT_FULFILLED: {
      const { data } = action.payload;
      const { byIds, allIds } = getLocalTodoList(data);
      return {
        allIds,
        byIds,
        fetchStatus: {
          fetching: false,
          fetched: true,
        },
      };
    }
    case ADD_TODO_REJECTED:
    case DROP_TODO_REJECTED:
    case TOGGLE_FAVORITE_REJECTED:
    case FETCH_UPDATE_CONTEXT_REJECTED:
      return {
        ...state,
        fetchStatus: {
          fetching: false,
          fetched: true,
          fetchError: payload,
        },
      };
    case CHANGE_CONTEXT_FLAG:
      const { id, changingFlag } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            changingFlag,
          },
        },
      };
    default:
      return state;
  }
}
