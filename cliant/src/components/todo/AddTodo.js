import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  changeText = () => {
    const text = document.getElementById("add-todo-text-area").value;
    this.setState({ text });
  };

  addTodo = () => {
    const content = this.state.text;
    const params = new URLSearchParams();
    params.append("content", content);
    this.props.addTodo(params);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <textarea
          className={"common-textarea-option main-textarea-size"}
          id="add-todo-text-area"
          type="text"
          placeholder="example) go shopping"
          onChange={this.changeText}
          value={this.state.text}
        />
        <button onClick={this.addTodo}>todo追加</button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
