import React from "react";
import { connect } from "react-redux";
import className from "classnames";

import {
  toggleFavorite,
  updateChangeFlag,
  updateContent,
} from "../../redux/actions";
import {
  STATUS_DONE,
  FAVORITE_YES,
  FAVORITE_NO,
  CHANGING_FLAG_TRUE,
  CHANGING_FLAG_FALSE,
} from "../../utils/constants";

const Todo = ({
  todo,
  index,
  toggleFavorite,
  updateChangeFlag,
  updateContent,
}) => (
  <li
    className={"list-style-none"}
    id={index}
    draggable="true"
    onDragStart={() => {
      event.dataTransfer.setData("id", event.target.id);
    }}
  >
    {todo.changingFlag ? (
      <div className={"todo-item-container"}>
        <div className={"item"}>
          <input
            id={`changing_text_todo${index}`}
            type="text"
            defaultValue={todo.content}
          ></input>
        </div>
        <div className={"item"}>
          <button
            className={"button-clear-decoration"}
            onClick={() => {
              const content = document.getElementById(
                `changing_text_todo${index}`
              ).value;
              const params = new URLSearchParams();
              params.append("id", index);
              params.append("content", content);
              updateContent(params);
            }}
          >
            更新
          </button>
        </div>
        <div className={"item"}>
          <button
            className={"button-clear-decoration"}
            onClick={() => updateChangeFlag(index, CHANGING_FLAG_FALSE)}
          >
            終了
          </button>
        </div>
      </div>
    ) : (
      <div className={"todo-item-container"}>
        <div className={"item"}>
          {todo.status == STATUS_DONE ? "🙆" : "🙅"}{" "}
          <span onClick={() => updateChangeFlag(index, CHANGING_FLAG_TRUE)}>
            {todo.content}
          </span>
        </div>
        <div className={"item"}>
          <button
            className={"button-clear-decoration"}
            onClick={() => {
              const params = new URLSearchParams();
              params.append("id", index);
              params.append("favorite", !todo.favorite);
              toggleFavorite(params);
            }}
          >
            {todo.favorite ? "💖" : "🤍"}
          </button>
        </div>
      </div>
    )}
  </li>
);

export default connect(null, {
  toggleFavorite,
  updateChangeFlag,
  updateContent,
})(Todo);
