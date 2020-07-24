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

  add = () => {
    const text = this.state.text;
    this.props.addTodo(text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <input
          id="add-todo-text-area"
          type="text"
          placeholder="example) go shopping"
          onChange={this.changeText}
          value={this.state.text}
        />
        <button onClick={this.add}>todo追加</button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
