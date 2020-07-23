import React from "react";
import className from "classnames";
import Todos from "./Todos";
import Doings from "./Doings";
import Dones from "./Dones";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <AddTodo />
        <div className={"todo-list-container"}>
          <div className={"item"}>
            <h3>TODO</h3>
            <Todos />
          </div>
          <div className={"item"}>
            <h3>DOING</h3>
            <Doings />
          </div>
          <div className={"item"}>
            <h3>DONE</h3>
            <Dones />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
