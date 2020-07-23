import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Todos = ({ todosIds, byIds }) => (
  <div className="todo-list-todo-container todo-list-all-container">
    <ul>
      {todosIds && todosIds
        ? todosIds.map((index) => {
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
  let todosIds = [];
  todos.allIds.map((index) => {
    console.log(todos.byIds[index].status);
    if (todos.byIds[index].status == "TODO") {
      todosIds.push(index);
    }
  });
  return { todosIds, byIds };
};

export default connect(mapStateToProps)(Todos);
