import React from "react";
import { connect } from "react-redux";
import className from "classnames";
import { toggleTodo } from "../../redux/actions";

import { STATUS_DONE } from "../../utils/constants";

const Todo = ({ todo }) => (
  <li className="todo-item">
    {todo.status == STATUS_DONE ? "🙆" : "🙅"}{" "}
    <span>
      {todo.content}
    </span>
  </li>
);

export default connect(null, { toggleTodo })(Todo);
