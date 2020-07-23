import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { dropTodo } from "../../redux/actions";
import { STATUS_TODO } from "../../utils/constants";

const Todos = ({ todosIds, byIds, dropTodo }) => (
  <div
    className="todo-list-todo-container todo-list-all-container"
    onDragOver={() => event.preventDefault()}
    onDrop={() => dropTodo(event, STATUS_TODO)}
  >
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
    if (todos.byIds[index].status == STATUS_TODO) {
      todosIds.push(index);
    }
  });
  return { todosIds, byIds };
};

export default connect(mapStateToProps, { dropTodo })(Todos);
