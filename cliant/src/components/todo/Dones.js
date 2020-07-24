import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { dropTodo } from "../../redux/actions";
import { STATUS_DONE } from "../../utils/constants";

const Dones = ({ donesIds, byIds, dropTodo }) => (
  <div
    className={"todo-list-done-container todo-list-all-container"}
    onDragOver={() => event.preventDefault()}
    onDrop={() => dropTodo(event, STATUS_DONE)}
  >
    <ul>
      {donesIds && donesIds
        ? donesIds.map((index) => {
            return (
              <Todo key={`todo-${index}`} index={index} todo={byIds[index]} />
            );
          })
        : "NO Done, yay!"}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  const todos = state.todos;
  const byIds = state.todos.byIds;
  let donesIds = [];
  todos.allIds.map((index) => {
    if (todos.byIds[index].status == STATUS_DONE) {
      donesIds.push(index);
    }
  });
  console.log(donesIds);
  console.log(todos);
  return { donesIds, byIds };
};

export default connect(mapStateToProps, { dropTodo })(Dones);
