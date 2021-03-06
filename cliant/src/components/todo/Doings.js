import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { dropTodo } from "../../redux/actions";
import { STATUS_DOING } from "../../utils/constants";

const Doings = ({ doingsIds, byIds, dropTodo }) => (
  <div
    className={"todo-list-doing-container todo-list-all-container"}
    onDragOver={() => event.preventDefault()}
    onDrop={() => {
      const id = Number(event.dataTransfer.getData("id"));
      const params = new URLSearchParams();
      params.append("id", id);
      params.append("status", STATUS_DOING);
      dropTodo(params);
    }}
  >
    <ul>
      {doingsIds && doingsIds
        ? doingsIds.map((index) => {
            return (
              <Todo key={`todo-${index}`} index={index} todo={byIds[index]} />
            );
          })
        : "NO Doing, yay!"}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const todos = state.todos;
  const byIds = state.todos.byIds;
  let doingsIds = [];
  todos.allIds.map((index) => {
    console.log(todos.byIds[index].status);
    if (todos.byIds[index].status == STATUS_DOING) {
      doingsIds.push(index);
    }
  });
  return { doingsIds, byIds };
};

export default connect(mapStateToProps, { dropTodo })(Doings);
