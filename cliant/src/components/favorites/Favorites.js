import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/Todo";
import { FAVORITE_YES } from "../../utils/constants";

const Favorites = ({ doingsIds, byIds }) => (
  <div className={"todo-list-all-container"}>
    <h1>Favorites</h1>
    <ul>
      {doingsIds && doingsIds
        ? doingsIds.map((index) => {
            return (
              <Todo key={`todo-${index}`} index={index} todo={byIds[index]} />
            );
          })
        : "NO Favorite, yay!"}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const todos = state.todos;
  const byIds = state.todos.byIds;
  let doingsIds = [];
  todos.allIds.map((index) => {
    console.log(todos.byIds[index].status);
    if (todos.byIds[index].favorite == FAVORITE_YES) {
      doingsIds.push(index);
    }
  });
  return { doingsIds, byIds };
};

export default connect(mapStateToProps)(Favorites);
