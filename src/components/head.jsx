import React, { Component } from "react";

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ``,
    };
  }
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }
  handleClick() {
    this.props.handler(this.state.content);
    this.setState({
      content: ``,
    });
  }
  render() {
    return (
      <form className="input_form">
        <input
          type="text"
          name="task"
          className="task_input"
          value={this.state.content}
          onChange={this.handleContent.bind(this)}
        />
        <button
          type="submit"
          name="submit"
          id="add_btn"
          className="add_btn"
          onClick={this.handleClick.bind(this)}
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default Head;
