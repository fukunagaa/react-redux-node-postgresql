import {
  ADD_TODO_PENDING,
  ADD_TODO_FULFILLED,
  ADD_TODO_REJECTED,
  DROP_TODO_PENDING,
  DROP_TODO_FULFILLED,
  DROP_TODO_REJECTED,
  TOGGLE_FAVORITE,
} from "../actionTypes";

import { todoInitialState } from "../initialState";
import { STATUS_TODO, FAVORITE_NO } from "../../utils/constants";

let byIds;
let allIds;

export default function (state = todoInitialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO_FULFILLED: {
      const { data } = action.payload;
      console.log(data);
      byIds = new Object();
      allIds = [];
      data.map((obj) => {
        let intId = Number(obj.id_seq);
        console.log(intId);
        byIds = {
          ...byIds,
          [intId]: {
            content: obj.content,
            status: obj.status,
            favorite: obj.favorite,
          },
        };
        allIds.push(intId);
      });
      console.log(byIds);
      return {
        allIds,
        byIds,
      };
    }
    case DROP_TODO_FULFILLED: {
      const { data } = action.payload;
      console.log(data);
      byIds = new Object();
      allIds = [];
      data.map((obj) => {
        let intId = Number(obj.id_seq);
        console.log(intId);
        byIds = {
          ...byIds,
          [intId]: {
            content: obj.content,
            status: obj.status,
            favorite: obj.favorite,
          },
        };
        allIds.push(intId);
      });
      console.log(byIds);
      return {
        allIds,
        byIds,
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
            favorite: !state.byIds[id].favorite,
          },
        },
      };
    }
    default:
      return state;
  }
}
