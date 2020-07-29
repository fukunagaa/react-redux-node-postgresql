import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      base64: "",
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
    console.log(this.state);
    this.setState({ text: "", base64: "" });
  };

  changePreview = () => {
    console.log("preview");
    const image = document.getElementById("image");
    const file = image.files[0];
    console.log(image.files[0]);
    let fileReader = new FileReader();
    fileReader.onload = () => {
      document.getElementById("preview").src = fileReader.result;
      this.setState({ base64: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div>
        <div className={"add-todo-area-container"}>
          <div className={"item"}>
            <textarea
              className={"common-textarea-option main-textarea-size"}
              id="add-todo-text-area"
              type="text"
              placeholder="example) go shopping"
              onChange={this.changeText}
              value={this.state.text}
            />
          </div>
          <div className={"item"}>
            <img
              id="preview"
              className={"image-preview"}
              width="100px"
              height="100px"
            />
          </div>
          <div className={"item"}>
            <input
              type="file"
              accept="image/*"
              id="image"
              onChange={() => this.changePreview()}
            />
          </div>
        </div>
        <div>
          <button onClick={this.addTodo}>todo追加</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
