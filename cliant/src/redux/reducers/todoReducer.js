import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

import { todoInitialState } from "../initialState"; 
import { STATUS_TODO, STATUS_DOING, STATUS_DONE, FAVORITE_YES, FAVORITE_NO } from "../../utils/constants";

export default function (state = todoInitialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            status: STATUS_TODO,
            favorite: FAVORITE_NO,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status: STATUS_DONE,
          },
        },
      };
    }
    default:
      return state;
  }
}