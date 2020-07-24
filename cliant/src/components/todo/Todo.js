import React from "react";
import { connect } from "react-redux";
import className from "classnames";

import { toggleFavorite } from "../../redux/actions"
import { STATUS_DONE, FAVORITE_YES, FAVORITE_NO } from "../../utils/constants";

const Todo = ({ todo, index, toggleFavorite }) => (
  <li
    className={"list-style-none"}
    id={index}
    draggable="true"
    onDragStart={() => event.dataTransfer.setData("id", event.target.id)}
  >
    <div className={"todo-item-container"}>
      <div className={"item"}>
        {todo.status == STATUS_DONE ? "🙆" : "🙅"} <span>{todo.content}</span>
      </div>
      <div className={"item"}>
        <button className={"button-clear-decoration"} onClick={() => toggleFavorite(index)}>
          {todo.favorite ? "💖" : "🤍"}
        </button>
      </div>
    </div>
  </li>
);

export default connect(null, { toggleFavorite })(Todo);
