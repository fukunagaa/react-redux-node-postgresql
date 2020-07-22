import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default TodoApp;
