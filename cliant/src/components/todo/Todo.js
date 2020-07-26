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
        <div className={"item width-100-percent"}>
          <textarea
            className={
              "margin-13-0-px change-textarea-size common-textarea-option"
            }
            id={`changing_text_todo${index}`}
            type="text"
            defaultValue={todo.content}
          ></textarea>
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
            ✔
          </button>
        </div>
        <div className={"item"}>
          <button
            className={"button-clear-decoration"}
            onClick={() => updateChangeFlag(index, CHANGING_FLAG_FALSE)}
          >
            ✘
          </button>
        </div>
      </div>
    ) : (
      <div className={"todo-item-container"}>
        <div className={"item"}>
          <pre
            className={"margin-13-0-px display-wrap-keep-all"}
            onClick={() => updateChangeFlag(index, CHANGING_FLAG_TRUE)}
          >
            {todo.status == STATUS_DONE ? "🙆" : "🙅"} {todo.content}
          </pre>
        </div>
        <div className={"item"}>
          <button
            className={"button-clear-decoration margin-13-0-px"}
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
