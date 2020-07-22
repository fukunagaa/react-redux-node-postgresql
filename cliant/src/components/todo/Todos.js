import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Todos = ({ todos }) => (
  <ul className="todo-list">
    {todos.allIds && todos.allIds.length
      ? todos.allIds.map((index) => {
          return <Todo key={`todo-${index}`} todo={todos.byIds[index]} />;
        })
      : "NO todos, yay!"}
  </ul>
);

const mapStateToProps = (state) => {
  const todos = state.todos;
  console.log(todos);
  console.log(Object.keys(todos.byIds).forEach((key) => {
      console.log(todos.byIds[key]);
  }))
  return { todos };
};

export default connect(mapStateToProps)(Todos);
