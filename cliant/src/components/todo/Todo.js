import React from "react";
import className from "classnames";

import { STATUS_DONE } from "../../utils/constants";

const Todo = ({ todo, index, toggleTodo, dragStart }) => (
  <li
    className={"list-style-none"}
    id={index}
    onClick={() => toggleTodo(index)}
    draggable="true"
    onDragStart={() => event.dataTransfer.setData("id", event.target.id)}
  >
    {todo.status == STATUS_DONE ? "🙆" : "🙅"} <span>{todo.content}</span>
  </li>
);

export default Todo;
