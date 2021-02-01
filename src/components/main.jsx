import React, { Component } from "react";
import Head from "./head";
import Table from "./table";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, value: `Task #1` },
        { id: 2, value: `Task #2` },
        { id: 3, value: `Task #3` },
        { id: 4, value: `Task #4` },
      ],
    };
  }
  handleAdd(content) {
    this.setState((state) => {
      const stateLength = state.tasks.length;
      const newTaskId = state.tasks[stateLength - 1].id + 1;
      return { tasks: [...state.tasks, { id: newTaskId, value: content }] };
    });
  }

  render() {
    console.log(this.state);
        debugger
    return (
      <>
        <Head handler={this.handleAdd.bind(this)} />
        <Table tasks={this.state.tasks} />
      </>
    );
  }
}

export default Main;
