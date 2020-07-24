import { combineReducers } from "redux";
import todos from "./todoReducer";
import dummy from "./dummy";

export default combineReducers({ todos, dummy });
