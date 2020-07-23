import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Dones = ({ donesIds, byIds }) => (
  <div className={"todo-list-done-container todo-list-all-container"}>
    <ul>
      {donesIds && donesIds
        ? donesIds.map((index) => {
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
  let donesIds = [];
  todos.allIds.map((index) => {
    console.log(todos.byIds[index].status);
    if (todos.byIds[index].status == "DONE") {
      donesIds.push(index);
    }
  });
  console.log(donesIds);
  console.log(todos);
  return { donesIds, byIds };
};

export default connect(mapStateToProps)(Dones);
