import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Doings = ({ doingsIds, byIds }) => (
  <div className={"todo-list-doing-container todo-list-all-container"}>
    <ul>
      {doingsIds && doingsIds
        ? doingsIds.map((index) => {
            return (
              <Todo key={`todo-${index}`} index={index} todo={byIds[index]} />
            );
          })
        : "NO todos, yay!"}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const todos = state.todos;
  const byIds = state.todos.byIds;
  let doingsIds = [];
  todos.allIds.map((index) => {
    console.log(todos.byIds[index].status);
    if (todos.byIds[index].status == "DOING") {
      doingsIds.push(index);
    }
  });
  return { doingsIds, byIds };
};

export default connect(mapStateToProps)(Doings);
