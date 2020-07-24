import { ADD_TODO, DROP_TODO, TOGGLE_FAVORITE } from "../actionTypes";

import { todoInitialState } from "../initialState";
import {
  STATUS_TODO,
  STATUS_DOING,
  STATUS_DONE,
  FAVORITE_YES,
  FAVORITE_NO,
} from "../../utils/constants";

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
    case DROP_TODO: {
      const { event, status } = action.payload;
      const id = Number(event.dataTransfer.getData("id"));
      // dropイベント用
      event.preventDefault();
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            status,
          },
        },
      };
    }
    case TOGGLE_FAVORITE: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            favorite: !state.byIds[id].favorite
          }
        }
      }
    }
    default:
      return state;
  }
}
